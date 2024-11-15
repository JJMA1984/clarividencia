
const cardMeanings = {
    'death':'Trabajo budu peligro de muerte',
    'the devil': 'El devil entidad fantasmal, pacto a tu nombre y trabajo malefico ',
    'oros1': 'El As de Oros representa nuevos comienzos en el ámbito financiero, éxito y prosperidad.',
    'oros2': 'El 2 de Oros indica equilibrio y adaptabilidad en asuntos económicos.',
    'oros3': 'El 3 de Oros señala trabajo en equipo y reconocimiento profesional.',
    'oros4': 'El 4 de Oros simboliza la estabilidad financiera y la avaricia.',
    'oros5': 'El 5 de Oros sugiere dificultades económicas y la necesidad de buscar apoyo.',
    'oros6': 'El 6 de Oros representa generosidad y la redistribución de recursos.',
    'oros7': 'El 7 de Oros indica paciencia y la espera de resultados financieros.',
    'oros10': 'El 10 de Oros simboliza riqueza, herencias y estabilidad a largo plazo.',
    'oros11': 'La Sota de Oros representa una persona joven y ambiciosa en asuntos financieros.',
    'oros12': 'El Caballo de Oros simboliza un mensajero de buenas noticias financieras.',
    'oros13': 'El Rey de Oros indica una figura autoritaria y exitosa en el ámbito económico.',
    'copas1': 'El As de Copas representa nuevos comienzos emocionales, amor y felicidad.',
    'copas2': 'El 2 de Copas indica relaciones armoniosas y asociaciones felices.',
    'copas3': 'El 3 de Copas señala celebraciones, amistad y reuniones felices.',
    'copas4': 'El 4 de Copas sugiere introspección y reevaluación de relaciones emocionales.',
    'copas5': 'El 5 de Copas simboliza pérdida y tristeza, pero también esperanza.',
    'copas6': 'El 6 de Copas representa nostalgia y recuerdos felices del pasado.',
    'copas7': 'El 7 de Copas indica muchas opciones y la necesidad de elegir sabiamente.',
    'copas10': 'El 10 de Copas simboliza felicidad y armonía en la vida familiar.',
    'copas11': 'La Sota de Copas representa una persona joven y soñadora en asuntos emocionales.',
    'copas12': 'El Caballo de Copas simboliza un mensajero de buenas noticias emocionales.',
    'copas13': 'El Rey de Copas indica una figura autoritaria y emocionalmente equilibrada.',
    'espadas1': 'El As de Espadas representa claridad mental, nuevas ideas y verdad.',
    'espadas2': 'El 2 de Espadas sugiere decisiones difíciles y la necesidad de compromiso.',
    'espadas3': 'El 3 de Espadas señala dolor, pérdida y traición.',
    'espadas4': 'El 4 de Espadas simboliza descanso, recuperación y reflexión.',
    'espadas5': 'El 5 de Espadas indica conflicto, derrota y el coste de la victoria.',
    'espadas6': 'El 6 de Espadas representa transición, cambio y recuperación.',
    'espadas7': 'El 7 de Espadas sugiere engaño, estrategia y el uso de la astucia.',
    'espadas10': 'El 10 de Espadas simboliza finalizaciones dolorosas y traiciones.',
    'espadas11': 'La Sota de Espadas representa una persona joven y curiosa en asuntos intelectuales.',
    'espadas12': 'El Caballo de Espadas simboliza un mensajero de cambios y acción rápida.',
    'espadas13': 'El Rey de Espadas indica una figura autoritaria y justa en asuntos intelectuales.',
    'bastos1': 'El As de Bastos representa nuevos comienzos, energía y creatividad.',
    'bastos2': 'El 2 de Bastos sugiere planificación y la toma de decisiones importantes.',
    'bastos3': 'El 3 de Bastos señala expansión, crecimiento y visión a largo plazo.',
    'bastos4': 'El 4 de Bastos simboliza celebración, éxito y estabilidad.',
    'bastos5': 'El 5 de Bastos indica competencia, conflicto y desafío.',
    'bastos6': 'El 6 de Bastos representa victoria, reconocimiento y progreso.',
    'bastos7': 'El 7 de Bastos sugiere defensa, protección y valentía.',
    'bastos10': 'El 10 de Bastos simboliza responsabilidad, carga y esfuerzo sostenido.',
    'bastos11': 'La Sota de Bastos representa una persona joven y entusiasta en asuntos creativos.',
    'bastos12': 'El Caballo de Bastos simboliza un mensajero de noticias y oportunidades creativas.',
    'bastos13': 'El Rey de Bastos indica una figura autoritaria y visionaria en asuntos creativos.',
};

const cards = [
    'oros1', 'oros2', 'oros3', 'oros4', 'oros5', 'oros6', 'oros7', 'oros10', 'oros11', 'oros12', 'oros13',
    'copas1', 'copas2', 'copas3', 'copas4', 'copas5', 'copas6', 'copas7', 'copas10', 'copas11', 'copas12', 'copas13',
    'espadas1', 'espadas2', 'espadas3', 'espadas4', 'espadas5', 'espadas6', 'espadas7', 'espadas10', 'espadas11', 'espadas12', 'espadas13',
    'bastos1', 'bastos2', 'bastos3', 'bastos4', 'bastos5', 'bastos6', 'bastos7', 'bastos10', 'bastos11', 'bastos12', 'bastos13','the devil','death'        ];


    let cardDrawn = false;
    let discountShown = false;
    let discount = 0;

    function drawCard() {
        if (cardDrawn) {
            alert('Para seguir intentando, comunícate con nosotros y verás la realidad de la vida.');
            return;
        }
        cardDrawn = true;
        const randomIndex = Math.floor(Math.random() * cards.length);
        const selectedCard = cards[randomIndex];
        const cardElement = document.getElementById('card');
        cardElement.style.backgroundImage = `url('images/${selectedCard}.jpg')`;
        const resultElement = document.getElementById('result');
        resultElement.innerText = cardMeanings[selectedCard];
        document.getElementById('contactButton').style.display = 'block';
    }

    function showDiscount() {
        if (discountShown) {
            alert('Para seguir intentando, comunícate con nosotros y verás la realidad de la vida.');
            return;
        }
        discountShown = true;
        discount = Math.floor(Math.random() * 11) + 10;
        alert(`¡Felicitaciones obtuviste un descuento del: ${discount}% !`);
        setTimeout(redirectToWhatsApp, 500); // Add a short delay before redirecting to ensure the alert is seen
    }

    function redirectToWhatsApp() {
        const whatsappUrl = `https://wa.me/573124475604?text=${encodeURIComponent(`Hola Maestro JOSE FELIZ, he obtenido un descuento del ${discount}% como optenerlo. ¡Estoy interesado en saber más! La carta que saqué fue: ${document.getElementById('result').innerText}`)}`;
        window.location.href = whatsappUrl;
    }
