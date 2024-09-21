import "./css/Aside.css";
import ItemColor from "./color/ItemColor.jsx";
import ItemSize from "./size/ItemSize.jsx";
import ItemSexo from "./sexo/ItemSexo.jsx";
import ItemProduct from "./product/ItemProduct.jsx";

const Aside = () => {
    return (
        <aside className="product-filters p-3 border rounded bg-light">
            <h3 className="mb-4">Filtrar Produtos</h3>

            <div className="filter-section mb-4">
                <h4>Preço</h4>
                <input
                    type="range"
                    id="priceRange"
                    name="priceRange"
                    min="0"
                    max="1000"
                    step="50"
                    onInput="updatePriceValue(this.value)"
                    className="form-range"
                />
                <span id="priceValue">Até R$ 1000</span>
            </div>

            <div className="filter-section mb-4">
                <h4>Categorias</h4>
                <ItemProduct product={"Camisas"} value={"Camisas"}/>
                <ItemProduct product={"Camisetas"} value={"Camisetas"}/>
                <ItemProduct product={"Blusas"} value={"Blusas"}/>
                <ItemProduct product={"Calças"} value={"Calças"}/>
                <ItemProduct product={"Jaquetas"} value={"Jaquetas"}/>
                <ItemProduct product={"Colares"} value={"Colares"}/>
                <ItemProduct product={"Relógios"} value={"Relógios"}/>
            </div>

            <div className="filter-section mb-4">
                <h4>Cores</h4>
                <ItemColor color={"Branco"} value={"Branco"}/>
                <ItemColor color={"Preto"} value={"Preto"}/>
                <ItemColor color={"Azul"} value={"Azul"}/>
                <ItemColor color={"Verde"} value={"Verde"}/>
                <ItemColor color={"Amarelo"} value={"Amarelo"}/>
                <ItemColor color={"Rosa"} value={"Rosa"}/>
                <ItemColor color={"Cinza"} value={"Cinza"}/>
                <ItemColor color={"Vermelho"} value={"Vermelho"}/>
            </div>

            <div className="filter-section mb-4">
                <h4>Tamanhos</h4>
                <ItemSize size={"P"} value={"P"}/>
                <ItemSize size={"M"} value={"M"}/>
                <ItemSize size={"G"} value={"G"}/>
                <ItemSize size={"GG"} value={"GG"}/>
                <ItemSize size={"XG"} value={"XG"}/>
                <ItemSize size={"XL"} value={"XL"}/>
            </div>

            <div className="filter-section mb-4">
                <h4>Sexo</h4>
                <ItemSexo sexo={"Masculino"} value={"Masculino"}/>
                <ItemSexo sexo={"Feminino"} value={"Feminino"}/>
            </div>

            <button className="btn btn-primary" onClick={() => applyFilters()}>
                Aplicar Filtros
            </button>
        </aside>
    );
};

export default Aside;
