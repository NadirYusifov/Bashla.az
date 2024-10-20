import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Mentor() {

    const mentors = [
        {
            name: "Əli Veliyev",
            work: "Frontend Developer",
            experience: "10 ildən artıq frontend inkişaf təcrübəsinə malikdir.",
            email: "ali.veli@example.com",
            avatar: "https://t3.ftcdn.net/jpg/02/99/04/20/240_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
            thumbnail: "https://t4.ftcdn.net/jpg/05/50/45/11/240_F_550451150_L75q9zJ9X4mDYQPWKd9RuHJaUADgicXj.jpg",
            sosyalMedya: {
                facebook: "https://facebook.com/",
                instagram: "https://instagram.com/",
                linkedin: "https://linkedin.com/in/",
            },
        },
        {
            name: "Aysel Quliyeva",
            work: "Backend Developer",
            experience: "8 il backend proqramlaşdırma sahəsində təcrübəsi vardır.",
            email: "ayse.yilmaz@example.com",
            avatar: "https://t4.ftcdn.net/jpg/01/51/99/39/240_F_151993994_mmAYzngmSbNRr6Fxma67Od3WHrSkfG5I.jpg",
            thumbnail: "https://t4.ftcdn.net/jpg/03/52/28/51/240_F_352285136_a564n9xtSqu1WEmII0Vbbb4QOAwNqgDG.jpg",
            sosyalMedya: {
                facebook: "https://facebook.com/",
            },
        },
        {
            name: "Sənan Rzayev",
            work: "Full Stack Developer",
            experience: "5 il boyunca həm frontend, həm də backend inkişafında təcrübə qazanmışdır.",
            email: "mehmet.demir@example.com",
            avatar: "https://t4.ftcdn.net/jpg/02/92/95/17/240_F_292951705_zv47wnXkjzHzSouYLpYcNgTOOosDv1ml.jpg",
            thumbnail: "https://t4.ftcdn.net/jpg/05/46/10/15/240_F_546101577_7eZax3OCPZ1x8aST0oVsnDfX2OzjBsGr.jpg",
            sosyalMedya: {
                facebook: "https://facebook.com/",
                linkedin: "https://linkedin.com/in/",
            },
        },
        {
            name: "Fatimə Qorxmaz",
            work: "Mobile Developer",
            experience: "Mobil tətbiq inkişafında 7 il təcrübəyə malikdir.",
            email: "fatma.korkmaz@example.com",
            avatar: "https://t4.ftcdn.net/jpg/03/83/25/83/240_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
            thumbnail: "https://t3.ftcdn.net/jpg/02/88/27/86/240_F_288278616_lAcJPEcd63V4QTWBDPikBJKSUPOreHHF.jpg",
            sosyalMedya: {
                instagram: "https://instagram.com/",
                facebook: "https://facebook.com/",
            },
        },
        {
            name: "Emil Həsənov",
            work: "DevOps Engineer",
            experience: "6 il ərzində DevOps mühitində iş təcrübəsi var.",
            email: "emre.can@example.com",
            avatar: "https://t3.ftcdn.net/jpg/03/02/88/46/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
            thumbnail: "https://t4.ftcdn.net/jpg/04/68/10/79/240_F_468107903_XOgJFqJpXrFKfZ33AH8IRBR0UsQAxJRj.jpg",
            sosyalMedya: {
                linkedin: "https://linkedin.com/in/",
                facebook: "https://facebook.com/",
            },
        },
        {
            name: "Zeynəb Abbasova",
            work: "Data Scientist",
            experience: "12 ildən çox məlumat analizi və modeləşdirmə sahəsində təcrübəsi vardır.",
            email: "zeynep.arslan@example.com",
            avatar: "https://t3.ftcdn.net/jpg/01/24/87/48/240_F_124874813_ADIvA9kFLQRkDDY14QGYz8WijZHiI7JJ.jpg",
            thumbnail: "https://t4.ftcdn.net/jpg/09/31/52/81/240_F_931528159_lTg8l7RsjXtG302CzAm8UWdQxDacJDMG.jpg",
            sosyalMedya: {
                instagram: "https://instagram.com/",
            },
        },
        {
            name: "Faiq İsmayılov",
            work: "Game Developer",
            experience: "9 il oyun inkişafı sahəsində geniş təcrübəyə malikdir.",
            email: "ahmet.koc@example.com",
            avatar: "https://t4.ftcdn.net/jpg/03/03/11/75/240_F_303117590_NNmo6BS2fOBEmDp8uKs2maYmt03t8fSL.jpg",
            thumbnail: "https://t3.ftcdn.net/jpg/08/12/16/12/240_F_812161255_JszbK8Wm6pD2QGSM7HaaKgn1nJyw4yp7.jpg",
            sosyalMedya: {
                linkedin: "https://linkedin.com/in/",
                facebook: "https://facebook.com/",
            },
        },
        {
            name: "Lalə Həsənli",
            work: "QA Engineer",
            experience: "4 ildən artıq proqram təminatının test edilməsində təcrübəsi var.",
            email: "elif.celik@example.com",
            avatar: "https://t3.ftcdn.net/jpg/03/36/94/42/240_F_336944276_tpWzmwFi6JfZln5VlfBC1BZu5jgDOAl8.jpg",
            thumbnail: "https://t4.ftcdn.net/jpg/05/40/62/45/240_F_540624504_8WBPi5bBBS19EtNlivOhAw4Kl7xAge7W.jpg",
            sosyalMedya: {
                linkedin: "https://linkedin.com/in/",
                instagram: "https://instagram.com/",
            },
        },
        {
            name: "Turanə Quluzadə",
            work: "UI/UX Designer",
            experience: "3 il ərzində istifadəçi interfeysi və təcrübəsi dizaynında iş təcrübəsi vardır.",
            email: "burak.yildiz@example.com",
            avatar: "https://t4.ftcdn.net/jpg/03/38/90/37/240_F_338903738_RT7vLyCCZeWWvKD42waga3xej2CGFnXW.jpg",
            thumbnail: "https://t4.ftcdn.net/jpg/03/34/62/41/240_F_334624196_MCipQaVcn90tyEtTfgl602H4KNFp369F.jpg",
            sosyalMedya: {
                facebook: "https://facebook.com/",
                linkedin: "https://linkedin.com/in/",
            },
        },
        {
            name: "Turan Sultanov",
            work: "Security Engineer",
            experience: "11 il ərzində proqram təhlükəsizliyi sahəsində təcrübəyə malikdir.",
            email: "seda.aydin@example.com",
            avatar: "https://t4.ftcdn.net/jpg/03/61/34/27/240_F_361342769_X26dTcofZpukhMGYWFcn1wJNABEFtNLH.jpg",
            thumbnail: "https://t3.ftcdn.net/jpg/03/12/87/96/240_F_312879613_5zKaCBkUjOOjEGJfVSecZf7hcTDCAXt5.jpg",
            sosyalMedya: {
                instagram: "https://instagram.com/",
                facebook: "https://facebook.com/",
            },
        },
    ];



    return (
        <>
            <div className="mentors-card px-1">
                <div className="container">
                    <div className="mentors-card-wrapper grid grid-cols-1 lg:grid-cols-3 font-jakarta">
                        {mentors.map(mentor => (
                            <div className="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm">
                                <div className="relative h-40">
                                    <img className="absolute h-full w-full object-cover" src={mentor.thumbnail} />
                                </div>
                                <div className="relative shadow mx-auto h-28 w-28 -my-12 border-white rounded-full overflow-hidden border-4">
                                    <img className="object-cover w-full h-full" src={mentor.avatar} />
                                </div>
                                <div className="mt-16 px-5 text-wrap">
                                    <h1 className="text-[24px] leading-[30.24px] text-center font-semibold">
                                        {mentor.name}
                                    </h1>
                                    <div className="text-[16px] font-medium leading-[20.16px] text-dark-moderate-cyan text-center">
                                        <p className="text-[18px] leading-[22.68px] font-medium text-blue-8">{mentor.work}</p>
                                    </div>
                                    <div className="mentors-description text-center my-3 mb-6">
                                        <div className="mentors-desc-header text-[18px] font-normal leading-[22.68px] text-gray-700 pt-5">
                                            <p>{mentor.experience}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="social-media flex justify-center items-center mt-3 space-x-4 text-[20px] text-white">
                                        {mentor.sosyalMedya.instagram && <a className="bg-very-dark-blue px-2 py-2 rounded-full" href="https://www.instagram.com/"><FaInstagram /></a>}
                                        {mentor.sosyalMedya.facebook && <a className="bg-very-dark-blue px-2 py-2 rounded-full" href="https://www.facebook.com/"><FaFacebook /></a>}
                                        {mentor.sosyalMedya.linkedin && <a className="bg-very-dark-blue px-2 py-2 rounded-full" href="https://www.linkedin.com/"><FaLinkedin /></a>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mentor