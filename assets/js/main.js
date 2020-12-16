// La nostra todo list avrá alcune tasks di default predefinite
// L'utente puó inserire nuove tasks
// Cliccando sulla "X" l'utente puó cancellare una task
// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.

let app = new Vue ({
    el: "#root",
    data : {
        tasks:[
            "Leggere un libro",
            "Suonare la chitarra",
            "Chiamare la nonna"
        ],
        userTask: "test"
    },
    methods: {
        //funzione che consente di eliminare al click della X una singola task
        deleteTask: function(index){
            this.tasks.splice(index, 1);
        },

        //funzione che aggiunge task a tasks array
        addTask: function(){
            this.tasks.push(this.userTask)
        }
    }







});