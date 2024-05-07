class DynHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="/styles.css">
        <header>
        <h1>Emul8Me</h1>
        <nav>
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
        </nav>
        </header>
        `;
    }
}

class DynFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="/styles.css">
        <footer>
            <p>&copy; 2024 Emul8Me. All rights reserved.</p>
            <a href="//www.dmca.com/Protection/Status.aspx?ID=e263d3b0-3afd-482e-b077-633f612210af" title="DMCA.com Protection Status" class="dmca-badge"> <img src ="https://images.dmca.com/Badges/dmca-badge-w250-5x1-06.png?ID=e263d3b0-3afd-482e-b077-633f612210af"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
        </footer>
        `;
    }
}

customElements.define('dyn-header', DynHeader);
customElements.define('dyn-footer', DynFooter);