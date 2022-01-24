import { Component, OnInit } from "@angular/core";
import { PokemonService } from "src/app/services/pokemonService.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  pokemonList: any[] = [];
  paginaAtual = 1;
  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    for (let i = 1; i <= 151; i++) {
      let cont = 0;
      this.pokemonService.getPokemon(i).subscribe((data) => {
        let array: any[] = [];
        array.push(data);
        array.filter((element) => {
          this.pokemonList.push({
            name: element.name,
            id: element.id,
            type: element.types[cont].type,
          });
          cont++;

          this.pokemonList.sort((a, b) => {
            if (a.id < b.id) {
              return -1;
            } else {
              return 1;
            }
          });
        });
      });
    }
  }
}
