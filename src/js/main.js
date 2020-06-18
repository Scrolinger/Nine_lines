import './vendor';
import './helpers';

function chartSkills() {
	let inputAll = $('.skills__form input').length; // Всего нвыков
	let	inputCheck = $('.skills__form input:checked').length; // Выбранные навыки
	let	percentFinish = inputCheck / inputAll * 10000; // Разделив на 100, получится в процентах, как говорила Юлия, но я сделал, как в макете
	let	rotateFinish = inputCheck / inputAll * 180; // Градус

	// Переопределение процента (если на 100 делить)
	$('.level__percent').animate({numberValue: percentFinish}, {
		step: function (val) { // линтер step
			$('.level__percent').html(Math.ceil(val));
		},
		duration: 250,
	});

	// Переопределение градуса стрелки
	$('.level__arrow').animate({numberValue: rotateFinish}, {
		step: function (val) { // линтер step
			let deg = 'rotate(' + val + 'deg)'; // линтер конкат
			$(this).css('-webkit-transform', deg);
			$(this).css('-moz-transform', deg);
			$(this).css('transform', deg);
		},
		duration: 250,
	});
}

// Выставление процента и угла сразу
chartSkills();

// Изменение процента и угла при выборе навыка
$('.skills__label').on('click', () => {
	chartSkills();
});
