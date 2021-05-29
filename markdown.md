# Section's

- [Header](#Headers)
- [Quote](#Quote)
- [Emphasis](#Emphasis)
- [Horizontal Rules](#HorizontalRules)
- [Lists](#Lists)
- [Links](#Links)
- [Images](#Images)
- [Code](#Code)
- [Tables](#Tables)
- [customize html css](#customize_html_using_CSS)

# Headers

**Ex:**

## header1

### header2

#### header3

# Quote

**Ex:**

> new quote

> new quote

# Emphasis

Add emphasis with asterisks '\*' and underscore '\_'
Two before and after (no spaces ) a section of text makes it bold

**Ex:**

**Bold**

**Bold**

_Italic_

_Italic_

This is my _italic_ word and this is my **bold** word.

# HorizontalRules

A horizontal rules gives a visible line break. You can create one by putting three or more hypens, asterisks, or underscores (- , \* , \_ ).

For what it's worth, I prefer dashes...

**Ex:**

---

# Lists

Create unorderlist using '-' , '\*' , '+' .

- Item 1
- Item 2
- Item 3

---

Create sublist by identitng:

- Item 1
  - sub list
    - another sublist

---

Create order list using a number in prefix:

1. Item 1
1. Item 2
1. Item 3

> Create an list of your 5 favourite tv shows.

# Links

<https://www.google.com>

OR

[**Google**](https://www.google.com)

---

If we need to reuse a link several time, We can create a reference styel link with a key.

**Ex:**

[mainlink]: https://www.google.com

[**Google**][mainlink]

When we create a header tag for example, it implicity creates an id property.

**Ex:** '# header' becomes `<h1 id= 'header'>header</h1>`

# Images

![DevShiv]()

[profile]: https://markdown-here.com/img/icon256.png

![myPic][profile]

# Code

You can do inline code using `backtick` ( `` )

The above cannot give language specific higlighting. You can specify the programming language immidate following the opening 3 backticks.
You should see a difference following in highlighting.

```JavaScript
<h1 id= 'header'> Header </h1>

let var = document.getElementById('header')
```

```HTML
<div>
    <p>lorem ipsum</p>
</div>
```

```CSS
.header{
    color: white;
    font-size: 1rem;
}
```

# Tables

| Header 1 | Header 2 | Header |
| -------- | -------- | ------ |
| Col 1    | Col 2    | Col 3  |

---

**We can align table headers**

**Ex:**

| Header       |     Header     |        Header |
| ------------ | :------------: | ------------: |
| Aligned Left | Aligned Center | Aligned Right |

---

## customize_html_using_CSS

<style>
    body{
        background: ;
    }
    p{
        color: yellowgreen;
    }
    h1{
        font-weight: bold;
        color: orange;
    }
    h2{
        font-weight: bold;
        color: lightblue;
    }
</style>

```CSS
<style>
    p{
        color: yellowgreen;
    }
    h1{
        font-weight: bold;
        color: orange;
    }
    h2{
        font-weight: bold;
        color: lightblue;
    }
</style>
```
---

## StrikeThrough

~~This Text~~

~~is strike~~

~~Through it~~

