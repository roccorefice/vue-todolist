// La nostra todo list avrá alcune tasks di default predefinite
// L'utente puó inserire nuove tasks
// Cliccando sulla "X" l'utente puó cancellare una task
// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.

/////BONUS/////
// L'utente vuole poter modificare una task giá inserita
// ma vuole anche poter indicare che la task é stata completata
// inoltre se una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
// ah non é finita, dice che quando cancella una task, non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
// si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"

let app = new Vue ({
    el: "#root",
    data : {
        tasks:[
            "Leggere un libro",
            "Suonare la chitarra",
            "Chiamare la nonna"
        ],
        userTask: " ",
        complete: null,
        completedTasks: [],
        remove: null,
        removedTasks: [],
        requestRemove: null
    },
    methods: {
        //funzione che consente di eliminare al click della X una singola task
        deleteTask: function(index){
            this.tasks.splice(index,1);
        },

        //funzione che aggiunge task solo se maggiore di 4 caratteri
        addTask: function(){
            if(this.userTask.length >= 4 ){
                this.tasks.push(this.userTask);
                this.userTask = '';
            } else {
                alert("Riprova")
            }
        },

        //funzione che al click su icona check-square aggiunge le task completate(cliccate) all'array completedTasks
        completedTask: function(index){
            this.complete = true;
            if(this.complete){
                this.completedTasks.push(this.tasks[index])
            }
        },
        //Funzione che aggiunge task all'array removedTasks
        removedTask: function(index){
            this.remove = true;
            if(this.remove){
                this.removedTasks.push(this.tasks[index])
            }
        },

        //Funzione che permette di svuotare array removedTasks
        wantRemove: function(){
            this.requestRemove = prompt("do you want to empty the removed tasks? [Y] or [N]");
            if(this.requestRemove === "Y"){
                this.removedTasks = [];
            } else {
                this.removedTasks;
            }
        }
    },

    //funzione che consente di aggiungere task con il tasto "invio"
    mounted: function(){
        document.addEventListener("keyup", e => {
            if (e.key === "Enter"){
                this.addTask();
            } 
        });
    }
});