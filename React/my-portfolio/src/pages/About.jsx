import { motion } from 'framer-motion';

const About = () => {
    return (
        <section
            id='about'
            style={{
                padding: '80px 20px',
                backgroundColor: 'var(--bg)',
                color: 'var(--text)',
                textAlign: 'center',
            }}
        >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
            >
                Hakkımda
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{ maxWidth: 700, margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.7 }}
            >
                Merhaba! Ben Onur Çoğalan. Yazılım dünyasına farklı bir bölümden geldim ama bu alana olan ilgim öylesine güçlüydü ki, kısa sürede kendimi tamamen kodların içinde buldum. Özellikle mobil uygulama geliştirmeye karşı büyük bir tutkum var ve bu tutkumu React Native ile şekillendiriyorum.

                Sadece arayüzle yetinmeyip, backend tarafına da adım attım. Node.js ve Express ile sunucu tarafını anlamaya başladım; veritabanı yönetimi, API tasarımı ve Docker gibi konularda kendimi geliştiriyorum.

                Temiz kod yazmak, kullanıcı odaklı tasarımlar üretmek ve yeni teknolojileri öğrenmek benim için sadece bir hedef değil, aynı zamanda büyük bir keyif. Öğrendiklerimi uygulamaya dökerek her geçen gün bir adım daha ileri gitmeye çalışıyorum.

                Bu yolculukta durmadan ilerliyor, tutkumu gerçek projelere taşıma yolunda sağlam adımlar atıyorum.
            </motion.p>
        </section>
    );
};

export default About;