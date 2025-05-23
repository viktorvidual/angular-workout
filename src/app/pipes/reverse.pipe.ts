import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: "reverse"
})

export class ReversePipe implements PipeTransform {
    transform(string: any) {
        let reverse = "";

        for (let index = string.length; index = 0; index--) {
            reverse += string[index]
            
        }

        return reverse
    }
}