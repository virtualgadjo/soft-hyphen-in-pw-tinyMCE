tinymce.PluginManager.add('shy', (editor, url) => {
	editor.ui.registry.addButton('shy', {
		text: 'shy',
		tooltip: "insert softhyphen",
		onAction: () => {
			editor.insertContent(`&shy;`);
		}
	});
	// metadata
	return {
		getMetadata: () => ({ name: 'Shy' })
	};
});
