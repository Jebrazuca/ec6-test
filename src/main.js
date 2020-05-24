class App {
    constructor() {
        this.repositories = [];

        this.formElement = document.getElementById('repo-form');

        this.listElement = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formElement.onsubmit = event => this.addRepository(event);
    }

    addRepository() {
        event.preventDefault();

        this.repositories.push({
            name: 'rocketseat.com.br',
            description: 'Tire a sua ideida do papel e dê vida a sua startup.',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'https://github.com/Rocketseat',
        });

        this.render();
    }

    render() {
        this.listElement.innerHTML = '';

        this.repositories.forEach( repo => {
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', repo.avatar_url);

            let titleElement = document.createElement('strong');
            titleElement.appendChild(document.createTextNode(repo.name));

            let descElement = document.createElement('p');
            descElement.appendChild(document.createTextNode(repo.description));

            let linkElement = document.createElement('a');
            linkElement.setAttribute('target', '_blanck');
            linkElement.appendChild(document.createTextNode('Acessar'));

        

        })
    }
}

new App;