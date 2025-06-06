document.addEventListener('DOMContentLoaded', function() {
    // Cargar datos del JSON
    fetch('data/clasificacion.json')
        .then(response => response.json())
        .then(data => {
            renderSponsors(data.sponsors);
            renderClasificacion(data.clasificacion);
            renderProximosPartidos(data.proximosPartidos);
            renderGoleadores(data.goleadores);
            renderResultados(data.resultados);
        })
        .catch(error => console.error('Error al cargar los datos:', error));

    // Nueva función para renderizar sponsors
function renderSponsors(sponsors) {
    const container = document.getElementById('sponsors');
    
    sponsors.forEach(sponsor => {
        const card = document.createElement('div');
        card.className = 'sponsor-card';
        card.innerHTML = `
            <img src="${sponsor.logo}" alt="${sponsor.name}" class="sponsor-logo">
            <span class="sponsor-name">${sponsor.name}</span>
        `;
        container.appendChild(card);
    });
}


    // Función para renderizar la clasificación
    function renderClasificacion(clasificacion) {
        const container = document.getElementById('clasificacion');
        
        clasificacion.forEach(equipo => {
            const row = document.createElement('div');
            row.className = 'team-row';
            
            row.innerHTML = `
                <span>${equipo.posicion}</span>
                <span>${equipo.club}</span>
                <span>${equipo.jugados}</span>
                <span>${equipo.ganados}</span>
                <span>${equipo.empatados}</span>
                <span>${equipo.perdidos}</span>
                <span>${equipo.golesFavor}</span>
                <span>${equipo.golesContra}</span>
                <span>${equipo.diferencia > 0 ? '+' : ''}${equipo.diferencia}</span>
                <span>${equipo.puntos}</span>
            `;
            
            container.appendChild(row);
        });
    }

    // Función para Próximos Partidos (con logos)
function renderProximosPartidos(partidos) {
    const container = document.getElementById('proximos-partidos');
    partidos.forEach(partido => {
        const match = document.createElement('div');
        match.className = 'match-item';
        match.innerHTML = `
            <img src="${partido.logoLocal}" alt="${partido.local}" class="match-logo">
            <span>${partido.local}</span>
            <span class="vs">vs</span>
            <img src="${partido.logoVisitante}" alt="${partido.vs}" class="match-logo">
            <span>${partido.vs}</span>
            <span class="match-time">${partido.hora}</span>
        `;
        container.appendChild(match);
    });
}

// Función para Resultados (con logos)
function renderResultados(resultados) {
    const container = document.getElementById('resultados');
    resultados.forEach(resultado => {
        const result = document.createElement('div');
        result.className = 'result-item';
        result.innerHTML = `
            <div class="result-teams">
                <div class="result-team">
                    <img src="${resultado.logoLocal}" alt="${resultado.local}" class="result-logo">
                    <span>${resultado.local}</span>
                </div>
                <span class="result-score">${resultado.resultado}</span>
                <div class="result-team">
                    <img src="${resultado.logoVisitante}" alt="${resultado.visitante}" class="result-logo">
                    <span>${resultado.visitante}</span>
                </div>
            </div>
            <div class="result-date">${resultado.fecha}</div>
        `;
        container.appendChild(result);
    });
}
    // Función para renderizar goleadores
    function renderGoleadores(goleadores) {
        const container = document.getElementById('goleadores');
        
        goleadores.forEach(goleador => {
            const scorer = document.createElement('div');
            scorer.className = 'scorer-item';
            
            scorer.innerHTML = `
                <span class="scorer-position">${goleador.posicion}</span>
                <div class="scorer-info">
                    <div class="scorer-name">${goleador.nombre}</div>
                    <div class="scorer-club">${goleador.club}</div>
                </div>
                <span class="scorer-goals">${goleador.goles} goles</span>
            `;
            
            container.appendChild(scorer);
        });
    }

});