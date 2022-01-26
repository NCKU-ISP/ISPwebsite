const md = window.markdownit();

/**
 * Regular expression, please see here for more info
 * https://docs.microsoft.com/zh-tw/dotnet/api/system.text.regularexpressions.regex?view=net-5.0
*/
const md_rule = {
    tab: /[\r\n]---[\r\n]/g,
    section: /[\r\n]----[\r\n]/g,
    identifier1: /#\s\S+\s/g,
    identifier2: /##\s\S+\s/g,
    identifier3: /###\s\S+\s/g,
    title_filter1: /[^#]#\s\S+/g,
    title_filter2: /[^#]##\s.+/g,
    list: /-\s[^\[\]]\S.+/g,
    link: /-\s\[\S.+\]\(\S.+\)/g,
    link_text: /\[\S.+\]/g,
    link_url: /\(\S.+\)/g,
}

/**
  * Generate the navbar items and bind the clicking event
  * @param content {string} The article to be analyzed.
*/
function navigator_generator(content) {
    let navbar_items = $('#navbar_items')
    let btn_title = content.match(md_rule.identifier1)[0].slice(2, -1);
    let dropdown_menu = []
    let sub_titles = [...(content.matchAll(md_rule.title_filter2) || [])].flat()

    sub_titles.forEach(sub_title => {
        sub_title = sub_title.slice(3).trim()
        dropdown_menu.push(
            $(`
                <li>
                    <a class="dropdown-item" href="#${sub_title}">${sub_title}</a>
                </li>
            `)
        )
    })

    let main_item = null

    if (dropdown_menu.length == 0) {
        main_item = $(`
            <li class="nav-item">
                <a class="nav-link mx-2" href="${'#'}">${btn_title}</a>
            </li>
        `)
    } else {
        let menu = $(`<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="nav_1"></ul>`)
        dropdown_menu.forEach(o => menu.append(o))
        main_item = $(`
            <li class="nav-item dropdown">
                <a
                    class="nav-link mx-2 dropdown-toggle"
                    href="${'#'}"
                    id="nav_1"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    ${btn_title}
                </a>
            </li>
        `).append(menu)
    }

    navbar_items.append(main_item)
}

var tab_handler = {
    'NCKU': _ => null,
    '團隊介紹': contents => {
        let contents_dom = $(md.render(contents))
        const main_div = $(`<div id="team"></div>`)
        navigator_generator(contents)
        contents_dom.filter("h2").each(function () {
            console.log($(this).attr("id", $(this).text()));
        })
        $('#main').append(main_div.append(contents_dom))
    },
    '各組介紹': contents => {

    },
    '活動': contents => {
        navigator_generator(contents)
    },
    '專案計畫': function (contents) {
        navigator_generator(contents)
    },
    '歷屆作品': contents => {
        navigator_generator(contents)
    },
    '聯絡方式': contents => {
        const addresses = [...contents.matchAll(md_rule.list)].flat()
        const link_div = $(`<div class="row justify-content-center pt-3"></div>`)
        const links = [...contents.matchAll(md_rule.link)].flat()

        addresses.forEach(i => {
            $('#contact')
                .append(
                    $(`
                            <p class="text-center text-white">
                                <small>${i.slice(2)}</small>
                            </p>
                        `)
                )
        })

        links.forEach(ll => {
            const text = ll.match(md_rule.link_text).pop().slice(1, -1);
            const url = ll.match(md_rule.link_url).pop().slice(1, -1);
            link_div.append(
                $(`
                    <p class="col-1 text-center">
                        <a
                            href="${url}"
                            target="_blank"
                            class="text-white"
                        >
                            <i class="bi bi-${text}"></i>
                        </a>
                    </p>
                `)
            )
        })

        $('#contact').append(link_div)
    }
}

$.get('./data/content.md', data => {
    const tabs = data.split(md_rule.tab)
    tabs.forEach(tab_content => {
        let id = tab_content.match(md_rule.identifier1)[0].slice(2, -1);

        try {
            tab_handler[id](tab_content)
        } catch (e) {
            console.log(e)
        }
    });
});

$("#year").text((new Date()).getFullYear())