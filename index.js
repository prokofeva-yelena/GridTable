const dataExample = [
    {
        company: 'Alfreds <b>Futterkiste</b>',
        chef: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        chef: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        chef: 'Roland Mendel',
        country: 'Austria',
    },
    {
        company: 'Island Trading',
        chef: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        chef: 'Yoshi Tannamuri',
        country: 'Canada',
    }
];

let gridView = new GridView();
gridView.data = dataExample;

gridView.headerTitle = 'Table';
gridView.headerClasses = ['header1', 'header2'];
gridView.tableClasses = ['table'];
gridView.attributes = {
    company:{th:'Компания', tag: 'html'},
    chef:{th:'Директор'},
    country:{
        th: 'Страна',
        value: (data) => {
            if(data['country'] == 'Canada'){
                return 'Canada' + ' MAP';
            }
            return data['country'];
        }
    }
};
gridView.elem = 'body';
gridView.render();