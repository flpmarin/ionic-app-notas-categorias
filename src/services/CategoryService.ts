export class CategoryService{ //funciones para crud
    
    public async createNotes(titulo:string, descripcion:string, categoria:number){
        const url = 'http://127.0.0.1:8000/api/notas';
        const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    titulo: titulo,
                    descripcion: descripcion,
                    categoria: categoria
                })
        })
        const response = rawResponse.json();
        return response
    }
}