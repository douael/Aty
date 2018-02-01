/*
* 2007-2015 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2015 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
$(document).ready(function(){

	resizeCatimg();
	/*description()*/
});

$(window).resize(function(){
	resizeCatimg();
});

$(document).on('click', '.lnk_more', function(e){
	e.preventDefault();
	$('#category_description_short').hide(); 
	$('#category_description_full').show(); 
	$(this).hide();
});

function resizeCatimg()
{
	var div = $('.content_scene_cat div:first');

	if (div.css('background-image') == 'none')
		return;

	var image = new Image;

	$(image).load(function(){
	    var width  = image.width;
	    var height = image.height;
		var ratio = parseFloat(height / width);
		var calc = Math.round(ratio * parseInt(div.outerWidth(false)));

		div.css('min-height', calc);
	});
	if (div.length)
		image.src = div.css('background-image').replace(/url\("?|"?\)$/ig, '');
}

/*function description() {

	var container = $(".breadcrumb div.description p")[0].innerText;
	var globalContainer = $("div.addcategory");
	
	var target = $("div.description h6");
	target.hide();
	var title = target.next();
	var txt = title.next();
	if (title[0].innerText != "Loremp Ipsum") {
		var receiveTitle = $('.receive_title');
		receiveTitle[0].innerHTML = title[0].innerHTML

		var receiveText = $('.receive_text p');
		receiveText[0].innerHTML = txt[0].innerHTML

	}else {
		globalContainer.hide();
	}

		title.remove();
		txt.remove();

	/*var bold = $("#descriptionContainer p");
	bold.css('font-weight','normal');
	var containerTxt = $(".descriptionPage");
	var containerTitle = $(".titlePage");
	
	var type = null;

	target.hide();

	var txt = target.next();

	if(txt.length == 0 ) {
		globalContainer.hide();
	}	

	while(txt.length > 0 ) {

		result = txt[0].outerHTML;
		type = txt[0].nodeName;

		if(type.indexOf("H") == -1) {
			containerTxt.prepend(result);
		} else {
			containerTitle.prepend(result);
		}
		txt.hide();
		txt = txt.next();
	}
*/
/*}*/