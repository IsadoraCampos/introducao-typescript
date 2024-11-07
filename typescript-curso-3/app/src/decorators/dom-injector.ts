export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string) {
        let elemento: HTMLElement | null = null;
        const getter = function() {
           // return document.querySelector(seletor);
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            return elemento;
        }

        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    }
}