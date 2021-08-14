interface IListArticleItem {
    link: string;
    title: string;
    category: {
        name: string;
        link: string;
    };
    regDate: string;
    commentsCount: string;
    thumbnail: string;
}

interface IComment {
    id: string;
    class: string;
    name: string;
    logo?: string;
    date: string;
    description: string;
    onclick: {
        reply?: string;
        delete: string;
    };
    children: IComment[];
}

interface ICommentData {
    textarea: {
        guest_input_name: string;
        guest_name: string;
        guest_input_password: string;
        guest_password: string;
        textarea_body: string;
        isSecret?: string;
        onclick: string;
    };
    list: IComment[];
}

interface IListData {
    conformance: string;
    count: string;
    image: string;
    description: string;
    style: string;
    articles: IListArticleItem[];
}

interface ISideItems {
    recentArticles: IListArticleItem[];
    recentComments: {
        link: string;
        description: string;
        name: string;
        regDate: string;
    }[];
    popularArticles: IListArticleItem[];
}

interface IBlogEssentialData {
    bodyId: string;
    info: {
        title: string;
        image: string;
        description: string;
        blogger: string;
        link: string;
    };
    visitors: {
        total: string;
        today: string;
        yesterday: string;
    };
    owner: {
        url: string;
        post: string;
    };
    title: string;
    list?: IListData;
    paging?: {
        previous: {
            page: string;
            noMore: string;
        };
        next: {
            page: string;
            noMore: string;
        };
        list: {
            link: string;
            num: string;
        }[];
    };
}

interface IGuestbookData extends IBlogEssentialData {
    guestbook: ICommentData;
}

interface ITagData extends IBlogEssentialData {
    tags: {
        link: string;
        class: string;
        name: string;
    }[];
}

interface IArticleData extends IBlogEssentialData {
    link: string;
    title: string;
    category: {
        name: string;
        link: string;
    };
    regDate: string;
    author: string;
    description: string;
    thumbnail: string;
    commentsCount: string;
    comments: ICommentData;
}

interface INoticeData extends IBlogEssentialData {
    isNotice: boolean;
    title: string;
    date: string;
    description: string;
}
