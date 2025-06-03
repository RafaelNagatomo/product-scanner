import ProductEntity from "@core/entities/product";

export class ProductControllerWeb {
    static async fetchProduct(): Promise<ProductEntity[]> {
        return await fetch('http://localhost:4000/api/product')
            .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
            })
            .catch(error => {
                console.error('Erro ao buscar os dados:', error);
            });
    }
}