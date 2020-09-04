# Responsividade

**Aula sobre responsividade.** 
*Foco é entender e aprender a ajustar telas de aplicações de acordo com layout e tela dos dispositivos.*

Professor Mayk Brito da [Rocketseat](https://rocketseat.com.br/).

Série **Masterclass**.

- Link da [aula](https://www.youtube.com/watch?v=H91DhKPjhPk).


Conceitos e tecnologias!
- [X] CSS
- [X] HTML
- [X] JavaScript
- [X] Responsividade

## CSS Units

- Unidadedes de medidas do CSS:

1.Layout Fixo
- ``` px  ``` - Pixels

2.Layout Fluído
- ``` %  ``` - Porcentagem
- ``` auto ``` - Automático
- ` vh ` - Viewport Heigth
- ` vw ` - Viewport Width

3.Textos fixos
- ``` 1px ``` = 0.75pt
- ``` 16px ``` = 12pt

4.Textos fluídos
- ``` em  ``` - multiplicado pelo pai
- ``` rem  ``` - multiplicado pelo root


## CSS Media Queries

- Usar tag `meta` no **HTML**

```

<meta name="viewport" content="width=device-width, initial-scale=1.0">

```

- Usar tag `@media` no **CSS.**

```

@media (max-width: 320px) {
  #form h3 {
    font-size: 2rem;
  }
}

```




## HTML Media Attributes

Posso utilizar o atribuito `media` no link do meu **HTML**, ao importar um arquivo css, usando as 
propriedades da mesma forma que usaria na regra `@media` do css.

```
<link 
    rel="stylesheet"
    href="responsive.css" 
    media="screen and (max-width: 768px)"
/>

<link rel="stylesheet" href="print.css" media="print">

```



## Images

Usar a tag `<pictures>` torna as imagens responsivas.


``` 

    <picture class="image" alt="Imagem"> 
        <source media="(min-width: 768px)" 
            srcset="https://i.ytimg.com/vi/GykTLqODQuU/maxresdefault.jpg">
        <source media="(min-width: 320px)" 
            srcset="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg">
        <source media="(min-width: 10px)" 
            srcset="https://i.ytimg.com/vi/GykTLqODQuU/mqdefault.jpg">
        <img 
            src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" 
            alt="Imagem" />
    </picture> 

```

JPG, PNG vs SVG