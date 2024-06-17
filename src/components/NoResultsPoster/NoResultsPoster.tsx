import styles from "./NoResultsPoster.module.scss";

const NoResultsPoster = () => {
    return (
        <div className={styles.container}>
            <h3
                className={styles.title}
            >
                No hay publicaciones que coincidan con tu búsqueda
            </h3>
            <ul className={styles.detail}>
                <li>
                    <strong>Revisa la ortografía</strong> de la palabra.
                </li>
                <li>
                    Utiliza <strong>palabras más genéricas</strong> o menos palabras.
                </li>
                <li> <a href="https://www.mercadolibre.com.ar/categorias">Navega por categorías</a> de productos para encontrar un producto similar.
                </li>{/*  */}
            </ul>
        </div>
    );
}

export default NoResultsPoster;
