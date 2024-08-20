import Image from 'next/image';
import Link from 'next/link';
import phone from '/images/phone_icon.png';
import email from '/images/email_icon.png';
import styles from '../styles/services.module.css';
import styles_home from '../styles/home.module.css';
import logotipo from '/images/logo_renov.png';


function ourServices(){
    return <div className={styles.all}>
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

                <div className={styles.ourservices_container}> 
                            
                        <h1 className={styles.ourservices_principalTitle}>Nossos serviços</h1>
                        
                        <div className={styles.ourservices_texts}>
                            
                                <div className={styles.ourservices_div1}>
                                    <h3 className={styles.ourservices_title1}>Lavagem e limpeza profissional</h3>
                                    <h4 className={styles.ourservices_text1}>Utilizamos técnicas especializadas e produtos de alta performance para remover sujeiras, poluentes e manchas das fachadas. Nosso serviço de limpeza garante a revitalização das superfícies, mantendo a estética e protegendo os materiais contra o desgaste causado pelo tempo e agentes externos.</h4>
                                </div>

                         
                                <div className={styles.ourservices_div2}>
                                <h3 className={styles.ourservices_title2}>Reparos estruturais</h3>
                                    <h4 className={styles.ourservices_text2}>Realizamos a identificação e correção de falhas estruturais que possam comprometer a segurança e a durabilidade. Nossos profissionais aplicam soluções técnicas eficazes para restaurar a integridade e a estabilidade, garantindo que a estrutura se mantenha em perfeitas condições.</h4>           
                                </div>
                               
                     

                                <div className={styles.ourservices_div3}>
                                    <h3 className={styles.ourservices_title3}>Renovação de fachadas</h3>
                                    <h4 className={styles.ourservices_text3}>Damos nova vida às fachadas dos edifícios, aplicando materiais de alta qualidade e design moderno. Nosso serviço de renovação transforma a aparência externa, melhorando a estética e valorizando o prédio, ao mesmo tempo em que aumenta sua durabilidade e resistência às condições climáticas.</h4>
                                </div>
                                
                            
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

export default ourServices;