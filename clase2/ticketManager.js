class TicketManager {
    eventos; 
    #_precioBaseDeGanancia = 0.15;
    static ultimoId = 0;
    constructor() {
        this.eventos = [];
    }
    
    getEventos() {
        return this.eventos;
    }

    agregarEvento( nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        TicketManager.ultimoId++
        const evento = {
            nombre,
            lugar,
            precio:precio*this.#_precioBaseDeGanancia,
            capacidad,
            fecha,
            id: TicketManager.ultimoId,
            participantes: [],
        };
        this.eventos.push(evento);
    }
    agregarUsuario(idEvento, idUsuario){
        if(idEvento==undefined||idUsuario==undefined){
            throw new Error("Es importante que agregues el evento y el id")
        }
        const indexEvento = this.eventos.findIndex(dato => dato.id ==idEvento)
         if (indexEvento === -1){
            throw new Error("El evento no existe")
         }
         this.eventos[indexEvento].participantes.push(idUsuario)
        }
    
ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
    const eventoOriginal = this.eventos.find(
    (evento) => evento.id === idEvento
    );
    return {
        ...eventoOriginal,
        id: idEvento,
        lugar: nuevaLocalidad,
        fecha: nuevaFecha,

    };
}
}

const ticketManager = new TicketManager();
ticketManager.agregarEvento("Loolapallooza", "Buenos Aires", 50000);
ticketManager.agregarEvento("Primavera Sound", "Buenos Aires", 80000);
ticketManager.agregarUsuario(2, "Pepe");
ticketManager.ponerEventoEnGira(2, "Mar Del Plata", new Date());


console.log(ticketManager.getEventos());

