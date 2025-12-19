# Insert soft hyphen (&amp;shy;) in pw tinyMCE

easier it would be almost painful, sorry, I couldn't help myself 😀

<span style="color:red; font-weight: bold;">obvious, but still...</span>
**all you need is the js file; the assets folder just contains the images that decorate the blah blah blah you're reading right now.**

to install it in pw, put the js file where you want, e.g. /site/modules/tiny (up to you)
then go to modules -> configure -> InputfieldTinyMCE

![module_choosetiny](assets/configure_tiny.png)

and add the file path in the External plugin files textarea and save

![register_plugin](assets/tiny_extpugins_linke.png)

now, in the field you want to use it, input tab, enable the plugin

![enable_plugin](assets/enable_plugins.png)

and add it to the toolbar (using the select list or simply writing its name in the input and hit enter)

![add_button](assets/add_shy_toolbar.png)

now you should see a new button

![button](assets/shy_toolbar.png)

result, wherever your cursor is in the text,

![pointer](assets/pointer_where.png)

click on the shy "button", and this is what will happen.

![result](assets/shy_result.png)

**a little something good to know**\
unlike CKEditor, as you can see, if you insert shoft hyphens in TinyMCE, you will see them in the source code of the field. Tiny must use its own HTML-style source code viewer to display them.

