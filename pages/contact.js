import Image from 'next/image';
import Link from 'next/link';
import logotipo from '/images/logo_renov.png';
import phone from '/images/phone_icon.png';
import email from '/images/email_icon.png';
import styles from '../styles/contact.module.css';
import styles_home from '../styles/home.module.css';

function contact(){
    return <div>

        <div className={styles_home.header}>

            <div className={styles_home.logo_container}>
                <Image src={logotipo} alt="logo renov engenharia" className={styles_home.logo} />
            </div>

            <div className={styles_home.header_buttons}>
                <Link href="/">
                    <button className={styles_home.home_btn}>
                        <h4>Home</h4>
                    </button>
                </Link>

                <Link href="/services">
                    <button className={styles_home.ourservices_btn}>
                        <h4>Nossos serviços</h4>
                    </button>
                </Link>

                <Link href="/contact">
                    <button className={styles_home.contact_btn}>
                        <h4>Contato</h4>
                    </button>
                </Link>

            </div>

        </div>

        <div className={styles.contact_container}>

            <div className={styles.contact_text_div}> 
                <h1 className={styles.contact_text_h1}> Caso queira solicitar um orçamento, esclarecer dúvidas ou agendar uma consulta técnica, entre em contato conosco! Nossa equipe está à disposição para atender suas necessidades. </h1>
            </div>
            <div className={styles.contact_button_div}>
                <button className={styles.contact_btn}>
                    <a href="mailto:renovengenharia@hotmail.com?subject=Informações%20sobre%20os%20serviços&body=Prezados,%0A%0AEstou%20interessado%20em%20obter%20mais%20informações%20sobre%20os%20serviços%20de%20renovação%20de%20fachada.%0A%0AAgradeço%20desde%20já." className={styles.email}>
                        renovengenharia@hotmail.com
                    </a>
                </button>
            </div>
        </div>

        <div className={styles_home.bottom_container}>
                <div className={styles_home.bottom_logo_div}>
                    <Image src={logotipo} alt="logo renov engenharia" className={styles_home.bottom_logo} />
                </div>

                <div className={styles_home.bottom_contact}>
                    <h3 className={styles_home.bottom_contact_title}>Contato</h3>
                    <div className={styles_home.bottom_box1}>
                        <Image src={phone} alt="phone" className={styles_home.bottom_phone_img} />
                        <h4 className={styles_home.number}>(81) xxxx-xxxx</h4>
                    </div>

                    <div className={styles_home.bottom_box2}>
                        <Image src={email} alt="e-mail" className={styles_home.bottom_email_img} />
                        <h4 className={styles_home.email}>renovengenharia@hotmail.com</h4>
                    </div>
                
                </div>

        </div>

    </div>
}

export default contact;