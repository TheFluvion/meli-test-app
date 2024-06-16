import styles from './page.module.scss'

const Loading = () => {
    const text = 'Cargando...';
    const letters = text.split('');

    return (
        <main className={styles.loading}>
            {letters.map((letter, index) => (
                <span key={index} className={styles.letter} style={{ animationDelay: `${index * 0.1}s` }}>
                    {letter}
                </span>
            ))}
        </main>
    );
}

export default Loading;
