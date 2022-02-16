class Solo{
    constructor(x, y, largura, altura){
      this.altura = altura;
      this.largura = largura;
      //primeiro passo: criar as opções:
      var solo_options = {
        isStatic: true
      }

      //segundo passo: criar corpo e colocar no mundo:
      this.body = Bodies.rectangle(x, y, largura, altura, solo_options);
      World.add(world, this.body);

    }
    //terceiro passo: criar função de desenhar:
    mostrar(){
      
      push();
      rectMode(CENTER);
	    fill("crimson");
  	  rect(this.body.position.x, this.body.position.y, this.largura, this.altura);
	    pop();
    }
}