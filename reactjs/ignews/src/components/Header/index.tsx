import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            {/* Nós criamos uma div para englobar o conteúdo pois é necessário centralizar o conteúdo do header! */}
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="logo ig.news"/>
                <nav>
                    <a className={styles.active} href="#">Home</a>
                    <a href="#">Posts</a>
                </nav>
            </div>
        </header>
    )
}