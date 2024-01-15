
 const randomDados=()=>{
   return Math.round(Math.random()*100)
 }



 const randomColor=()=>{
   return Math.round(Math.random()*180)
 }

 const imprimir=()=>{
 
 graphic = {
   qualidade: randomDados(),   
   produtividade: randomDados(),   
   capacidade: randomDados(),   
}




let qualidade = graphic.qualidade
let produtividade = graphic.produtividade
let capacidade = graphic.capacidade



const ctx = document.getElementById('myChart');


      
new Chart(ctx, {
          type: 'doughnut',
          data: {
              labels: ['Qualidade', 'Produtividade', 'Capacidade'],
              datasets: [{
                  label: 'Consumo de API',
                  data: [qualidade, produtividade, capacidade],
                  borderWidth: 1,
                  backgroundColor: [
                     `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
                     `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
                     `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
                   ],
                   hoverOffset: 10
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }

            }
           
          
        });



      }

      
imprimir()