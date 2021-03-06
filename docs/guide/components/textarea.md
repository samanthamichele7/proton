---
title: Textarea
---

# Textarea

## Examples
<proton-example>
<p-textarea name="biography"></p-textarea>

<template slot="code">

```html
<p-textarea name="biography"></p-textarea>
```

</template>
</proton-example>

## Label
Add a label to the textarea with the `label` property.

<proton-example>
<p-textarea name="biography" label="Biography"></p-textarea>

<template slot="code">

```html
<p-textarea name="biography" label="Biography"></p-textarea>
```

</template>
</proton-example>

## Placeholder
Add a placeholder to the textarea with the `placeholder` property.

<proton-example>
<p-textarea name="biography" placeholder="Tell us a bit about yourself"></p-textarea>

<template slot="code">

```html
<p-textarea name="biography" placeholder="Tell us a bit about yourself"></p-textarea>
```

</template>
</proton-example>

## Help
Add help text below the textarea with the `help` property.

<proton-example>
<p-textarea name="biography" help="Tell us a bit about yourself"></p-textarea>

<template slot="code">

```html
<p-textarea name="biography" help="Tell us a bit about yourself"></p-textarea>
```

</template>
</proton-example>

## Validation Errors and Messaging
Add a validation message that can be toggled with the `error-message` and `has-error` properties.

<proton-example>
<p-textarea name="biography" help="Tell us a bit about yourself." error-message="We really wanna know some things about you!" :has-error="true"></p-textarea>

<template slot="code">

```html
<p-textarea name="biography" help="Tell us a bit about yourself." error-message="We really wanna know some things about you!" :has-error="true"></p-textarea>
```

</template>
</proton-example>

## Props
| Name | Type | Description | Options | Default |
|------|------|-------------|---------|---------|
| `v-model` | `Bind` | | | |
| `name` | `String` | The name and ID of the field. | | |
| `placeholder` | `String` | Placeholder value to be displayed inside the textarea. | | |
| `label` | `String` | Label to be associated with and displayed above the textarea. | | |
| `help` | `String` | Help text to be displayed below the textarea. | | |
| `required` | `Boolean` | If the textarea is required or not. | true, false | false |
| `readonly` | `Boolean` | If the textarea should be read-only or not. | true, false | false |
| `disabled` | `Boolean` | If the textarea should be disabled or not. | true, false | false |
| `monospaced` | `Boolean` | If the font used in the textarea should be monospaced or not. | true, false | false |
| `rows` | `Number` | The number of rows the textarea should initially span. | | 3 |
| `has-error` | `Boolean` | Toggle if the textarea has validation errors or not. | true, false | false |
| `error-message` | `String` | The message to be displayed when the textarea has an error. | | |