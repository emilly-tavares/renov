import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/home.module.css';
import logotipo from '../images/logo_renov.png';
import image from '../images/aboutUs_img.png';
import points from '../images/whychoose_img.png';
import phone from '../images/phone_icon.png';
import email from '../images/email_icon.png';


function Home(){
    return <div>

  
        <div className={styles.header}>

            <div className={styles.logo_container}>
                <Image src={logotipo} alt="logo renov engenharia" className={styles.logo} />
            </div>
            <div className={styles.header_buttons}>
                <Link href="/">
                    <button className={styles.home_btn}>
                        <h4>Home</h4>
                    </button>
                </Link>
                
                <Link href="/services">
                    <button className={styles.ourservices_btn}>
                        <h4>Nossos serviços</h4>
                    </button>
                </Link>

                <Link href="/contact">
                    <button className={styles.contact_btn}>
                        <h4>Contato</h4>
                    </button>
                </Link>

            </div>

        </div>

        <div className={styles.body}>

            <div className={styles.centralimages_container}>

                    <div className={styles.img1} ></div>

                    <div className={styles.centralimages_right}>
                        <div className={styles.img2}></div>
                        <div className={styles.img3}></div>
                    </div>
               
                
            </div>

            <div className={styles.aboutUs}>
                <div className={styles.aboutUs_box1}>
                    <h1 className={styles.aboutUs_title}>Sobre nós</h1>
                </div>
                <div className={styles.aboutUs_box2}>
                    <div className={styles.aboutUs_text_div}>
                        <h4 className={styles.aboutUs_text}>Renov Engenharia é uma empresa líder no mercado de revitalização de fachadas. Com mais de uma década de experiência, nossa equipe de especialistas dedicados e apaixonados pelo trabalho está empenhada em transformar e revitalizar edifícios, trazendo nova vida e beleza a cada projeto.</h4>
                    </div>
                    <div className={styles.aboutUs_img_div}>
                        <Image className={styles.aboutUs_img} src={image} alt="Minha Figura" />
                    </div>
                </div>
                
            </div>

            <div className={styles.whyChoose}>
                <div className={styles.whyChoose_box1}>
                    <h1 className={styles.whyChoose_title}>Por que escolher a Renov Engenharia?</h1>
                </div>
                
                <div className={styles.whyChoose_box2}>

                    <div className={styles.whyChoose_img_div}>
                        <Image className={styles.whyChoose_img} src={points} alt="Minha Figura" />
                    </div>
                    <div className={styles.whyChoose_texts}>

                        <h3 className={styles.whyChoose_text1}>Experiência Comprovada: Com mais de 10 anos de atuação no setor, nossa empresa tem um histórico sólido de sucesso e satisfação do cliente.</h3>
                        <h3 className={styles.whyChoose_text2}>Equipe Qualificada: Nossa equipe é composta por profissionais altamente treinados e apaixonados pelo que fazem, garantindo a qualidade em cada projeto.</h3>
                        <h3 className={styles.whyChoose_text3}>Resultados Visíveis: Nossos projetos anteriores falam por si, mostrando transformações impressionantes em edifícios de todos os tamanhos e estilos.</h3>
                        <h3 className={styles.whyChoose_text4}>Atendimento Personalizado: Cada cliente é único, e trabalhamos de perto com você para atender às suas necessidades específicas e visão.</h3>

                    </div>

                </div>
                
                
            </div>

        </div>

        <div className={styles.bottom_container}>
            <div className={styles.bottom_logo_div}>
             <Image src={logotipo} alt="logo renov engenharia" className={styles.bottom_logo} />
            </div>
            <div className={styles.bottom_contact}>
                <h3 className={styles.bottom_contact_title}>Contato</h3>
                <div className={styles.bottom_box1}>
                    <Image src={phone} alt="phone" className={styles.bottom_phone_img} />
                    <h4 className={styles.number}>(81) xxxx-xxxx</h4>
                </div>

                <div className={styles.bottom_box2}>
                    <Image src={email} alt="e-mail" className={styles.bottom_email_img} />
                    <h4 className={styles.email}>renovengenharia@hotmail.com</h4>
                </div>
                
            </div>
        </div>
  
    </div>
}
  
export default Home
  