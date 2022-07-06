class GridView{
    constructor(){
        this._headerTitle = '',
        this._headerClasses = [];
        this._tableClasses = [];
        this.elem = '';
        this.attributes = [];
    }
    set headerTitle(headerTitle){
        if(typeof headerTitle == 'string' && headerTitle.trim() !== ''){
            this._headerTitle = headerTitle.trim();
            return true;
        }
        return false;
    }
    set headerClasses(headerClasses){
        if(typeof headerClasses == 'object'){
            this._headerClasses = headerClasses;
            return true;
        }
        return false;
    }
    set tableClasses(tableClasses){
        if(typeof tableClasses == 'object'){
            this._tableClasses = tableClasses;
            return true;
        }
        return false;
    }

    render(){
        //create header
        if(this._headerTitle.trim() !== ''){
            let h1 = document.createElement('h1');
            h1.textContent = this._headerTitle;
            this._headerClasses.forEach(item => h1.classList.add(item));
            document.querySelector(this.elem).append(h1);  
        }
        //create headerTable
        let table = document.createElement('table');
        this._tableClasses.forEach(item => table.classList.add(item));
    
        let trHeader = document.createElement('tr');
        
        for(let key in this.attributes){
            let thHeader = document.createElement('th');
            if(this.attributes[key]['th']){
                thHeader.textContent = this.attributes[key]['th'];
            }
            trHeader.append(thHeader);
            table.append(trHeader);
        }
        //create table
        for(let i = 0; i < this.data.length; i++){
            let tr = document.createElement('tr');

            for(let key in this.attributes){
                let td = document.createElement('td');
                if(this.attributes[key].value){
                    td.textContent = this.attributes[key].value(this.data[i]);  
                }
                else if(this.attributes[key].tag){
                    td.innerHTML = this.data[i][key];
                }  
                else{
                    td.textContent = this.data[i][key];
                }
                tr.append(td);
                table.append(tr);
            }
        }
        document.querySelector(this.elem).append(table);
    }
}














