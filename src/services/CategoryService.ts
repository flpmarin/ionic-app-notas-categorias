export class CategoryService{ //funciones para crud
    
    public async createNotes(titulo:string, descripcion:string, categoria:number){
        const url = '';
        const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    titulo: titulo,
                    descripcion: descripcion,
                    cateforia: categoria
                })
        })
        const response = rawResponse.json();
        return response
    }
}