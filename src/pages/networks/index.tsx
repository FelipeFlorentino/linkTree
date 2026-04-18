import { useEffect, useState, type FormEvent } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export function Networks() {
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [whatsApp, setWhatsApp] = useState("");

    useEffect(() => {
        function loadLinks() {
            const docRef = doc(db, "social", "link");
            getDoc(docRef)
            .then((snapshot) => {
                if(snapshot.data() !== undefined) {
                    setFacebook(snapshot.data()?.facebook);
                    setInstagram(snapshot.data()?.instagram);
                    setWhatsApp(snapshot.data()?.whatsApp);
                }
            });
        }

        loadLinks();
    }, []);

    function handleRegister(e: FormEvent) {
        e.preventDefault();

        setDoc(doc(db, "social", "link"), {
            facebook: facebook,
            instagram: instagram,
            whatsApp: whatsApp
        }).then(() => {
            console.log("Cadastrados com Sucesso");
        }).catch((error) => {
            console.log("Erro ao Salvar: " + error);
        });
    }

    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas Redes Sociais</h1>

            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">Link do Facebook</label>
                <Input placeholder="Digite a url do Facebook..." type="url" value={facebook} onChange={(e) => setFacebook(e.target.value)} />

                <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
                <Input placeholder="Digite a url do Instagram..." type="url" value={instagram} onChange={(e) => setInstagram(e.target.value)} />

                <label className="text-white font-medium mt-2 mb-2">Link do WhatsApp</label>
                <Input placeholder="Digite a url do WhatsApp..." type="url" value={whatsApp} onChange={(e) => setWhatsApp(e.target.value)} />

                <button type="submit" className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium mt-2">
                    Salvar Links
                </button>
            </form>
        </div>
    )
}