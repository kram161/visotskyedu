<?php include('blocks/header.php'); ?>
<script>
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timezone: 'UTC'
    };

    var monthA = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
    var currentDate = new Date();
      
    currentDate.setDate(currentDate.getDate() + 1);
    
    var day = 'до ' + currentDate.getDate();
    var month = monthA[currentDate.getMonth()];
    
    console.log(day);
    console.log(month);
</script>
<style>
date.dd {
    line-height: 26px;
}
</style>

<header class="site-header js-header">
    <div class="site-header__row d-flex jc-end ai-center">
        <div class="site-header__logo d-flex">
            <div class="col-item"><img class="lazy" data-src="images/logo-header.svg" alt="Visotsky Consulting Inc." /></div>
            <div class="site-header__logo-text">Получи технологию выхода из операционки и увеличь прибыль в 2 раза</div>
        </div>
        <ul class="site-menu list-null js-menu">
            <li><a href="#proccess">Как мы учим</a></li>
            <li><a href="#results">Что в результате</a></li>
            <li><a href="#programm">Программа</a></li>
            <li><a href="#reviews">Отзывы</a></li>
            <li><a href="#company">О компании</a></li>
        </ul>
        <div class="col-item d-xl-none">
            <div class="burger js-open__menu"><span class="burger__line burger__line_first"></span><span class="burger__line burger__line_second"></span><span class="burger__line burger__line_third"></span><span class="burger__line burger__line_fourth"></span></div>
        </div>
    </div>
</header>
<main class="site-main">
    <div class="overflow-hidden">
        <div class="jumbotron">
            <div class="container">
                <div class="jumbotron__row">
                    <div class="flex-grow-1">
                        <div class="d-lg-none">
                            <div class="d-flex ai-center">
                                <div class="jumbotron__sub"> Без раздувания штата, без сложных процессов <span class="d-block">и табличек, и без потери контроля над бизнесом</span> </div>
                                <div class="jumbotron__sale-container d-sm-none ml-3">
                                    <div class="jumbotron__sale lazy" data-bg="images/jumbotron/sale-bg.svg">
                                        <div> <span>- 54%</span> <date class="dd">до 14</date> <br><date class="mm">ноября</date> </div>
                                    </div>
                                </div>
                            </div>
                            <h1 class="h1 jumbotron__title mb-lg-0 mb-4">Получите технологию <b>выхода из операционки и увеличьте прибыль</b><span class="d-lg-block"><b>в 2 раза</b></span></h1>
                        </div>
                        <div class="row jc-end p-relative">
                            <div class="col-sm-6 col-6">
                                <div class="d-lg-block d-none">
                                    <div class="jumbotron__sub"> Без раздувания штата, без сложных процессов <span class="d-md-block">и табличек, и без потери контроля над бизнесом</span> </div>
                                    <h1 class="h1 jumbotron__title">Получите технологию <b>выхода из операционки и увеличьте прибыль</b><span class="d-block"><b>в 2 раза</b></span></h1>
                                </div>
                                <div class="jumbotron__list">
                                    <div class="row gy-sm-2 gy-1 row-cols-lg-2 row-cols-1">
                                        <div class="col"><span class="jumbotron__list-title"><b> 6</b></span><b> дней</b> по 2 часа<span class="d-block"> интенсивной прокачки</span></div>
                                        <div class="col"><span class="jumbotron__list-title"></span>Через<b class="jumbotron__list-title"> 30 дней</b><span class="d-block">первый платеж</span></div>
                                        <div class="col d-sm-block d-none">
                                        	<b>Разборы практических</b><span class="d-block">заданий с обратной связью консультанта</span>
                                        </div>
                                        <div class="col"><span class="jumbotron__list-title"><b>31</b></span> готовый документ для внедрения в компанию (регламенты, политики<span class="d-block">и должностные инструкции)</span></div>
                                        <div class="col d-sm-none">
                                        	<b>Разборы практических</b><span class="d-block">заданий с обратной связью консультанта</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-sm-block d-none"> <a class="btn btn--xl" href="#programm">Смотреть программу тренинга</a> </div>
                            </div>
                            <div class="col-sm-6 col-10 d-sm-block d-none">
                                <div class="jumbotron__persone"> <img width="578" height="688" class="lazy" data-src="images/jumbotron/persone.webp" alt="Александр Высоцкий">
                                    <div class="d-lg-block d-none">
                                        <div class="prices__cv">
                                            <div class="mb-2">
                                                <div class="h5 mb-1 d-flex ai-center"> <b class='me-2'>Александр Высоцкий</b> </div>
                                            </div>
                                            <div class="mb-0"> Основатель компании, которая за 12 лет внедрила систему управления в 1007 компаниях с оборотом от 30 млн до 2.5 млрд рублей в год </div>
                                        </div>
                                    </div>
                                    <div class="jumbotron__sale lazy" data-bg="images/jumbotron/sale-bg.svg">
                                        <div> <span>- 54%</span> <date class="dd">до 14</date> <br><date class="mm">ноября</date> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-sm-none"> <img width="240" height="280" class="lazy jumbotron__persone--float" data-src="images/jumbotron/persone-mob.webp" alt="Александр Высоцкий"> </div>
                        </div>
                        <div class="d-lg-none mt-4">
                            <div class="mb-2">
                                <div class="h5 mb-1 d-flex ai-center"> <b class='me-2'><small>Александр Высоцкий</small></b> </div>
                            </div>
                            <div class="mb-0"> <small>Основатель компании, которая за 12 лет внедрила систему управления в 1007 компаниях с оборотом от 30 млн до 2.5 млрд рублей в год</small> </div>
                        </div><a class="btn btn--xl d-sm-none" href="#programm">Смотреть программу тренинга</a> </div>
                </div>
            </div>
        </div>
        <section>
            <div class="container">
                <h2 class="h1 mb-4"> 
                	Visotsky Consulting - консалтинговая компания №1 по количеству внедренных инструментов управления в малом и среднем бизнесе в СНГ 
                </h2>
                <p class="h5 mb-25">
                	Технология проверена на более чем 1000 компаниях из B2C, B2B, производства, товарного, <span class="smb-yellow-text">
                		<b>онлайн бизнеса и других ниш</b>
                </p>
                <div class="row gy-3 jc-center">
                    <div class="col-lg-6 col-sm-8"><img class="w-100 mb-3 lazy" data-src="images/about/1.webp" alt="Visotsky Consulting - консалтинговая компания №1 по количеству внедренных инструментов управления в малом и среднем бизнесе в СНГ"><img class="w-100 lazy" data-src="images/about/2.webp"
                            alt="Visotsky Consulting - консалтинговая компания №1 по количеству внедренных инструментов управления в малом и среднем бизнесе в СНГ"></div>
                    <div class="col-lg-6">
                        <div class="row about__content gy-1 h-100">
                            <div class="col-12">
                                <h4><b>Помогли 6062 владельцам бизнеса с 2009 года привести в порядок свой бизнес и выйти из операционки</b></h4>
                                <p class="h4"> Владельцы поставили директора и руководителей на посты, занимаются стратегическим развитием бизнеса и управляют своими компаниями удаленно </p>
                            </div>
                            <div class="col-12">
                                <h4><b>Владельцы сокращают свое операционное участие в бизнесе с 48 до 10 часов в неделю</b></h4>
                                <p class="h4"> Выстраивают систему и взращивают топовых руководителей, которые могут самостоятельно решать вопросы. Владельцы начинают заниматься стратегией, масштабированием бизнеса и выполнением своих истинных функции. </p>
                            </div>
                            <div class="col-12">
                                <h4><b>Доход компании растет с 39% до 515% после внедрения инструментов управления</b></h4>
                                <p class="h4 mb-0">Инструменты управления Visotsky Consulting эффективно работают в любом бизнесе. Оборот наших клиентов от 30 млн до 2.5 млрд рублей в год. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section--theme-yellow">
            <div class="container">
                <h2 class="h2 blockquote-title">
                	<span>
                		За 6 дней вы получите <b>технологию построения системного бизнеса</b>, чтобы команда развивала его без вашего операционного участия.
                	</span>
                </h2>
            </div>
        </section>
        <section class="section section--theme-dark">
            <div class="container">
                <div class="row ai-center jc-between flex-lg-nowrap">
                    <div class="col-xxl-6 col-lg-5 h5 target__text">
                        <div class="col-item">
                            <h2 class="h2 mb-4">Наша цель - системный бизнес, который<b> работает</b><span class="d-xxl-block"><b>на вас и растет без вашего ежедневного участия</b></span></h2>
                            <p class="mb-4">За 6 дней мы покажем вам как работают большие системные компании, какие инструменты управления они применяют и главное как<span class="smb-yellow-text ms-2 me-lg-0 me-2"><b>вы можете увеличить</b></span><span class="smb-yellow-text"><b>прибыль в 2 раза,</b></span>                                не работая круглые сутки.</p>
                            <p>Через 6 дней у вас будет четкое понимание как построить сильную команду, которая не дергает вас по пустякам и самостоятельно принимает эффективные решения.</p>
                        </div>
                        <p>Владельцы бизнеса, прошедшие тренинг,<b class="d-lg-block">кардинально меняют подход к управлению</b> бизнесом.</p>
                    </div>
                    <div class="target__slider mt-lg-0 mt-4">
                        <div class="device-slider">
                            <div class="device-slider__arrows">
                                <div class="device-slider__arrow js-device-slider__prev"><img class="lazy" data-src="images/icons/arrow-left.svg" alt="Листать"></div>
                                <div class="device-slider__arrow js-device-slider__next"><img class="lazy" data-src="images/icons/arrow-right.svg" alt="Листать"></div>
                            </div>
                            <div class="device-slider__circles"></div>
                            <div class="device-slider__container">
                                <div class="js-device-slider device-slider__items slick-preloader">
                                    <div class="item"><img width="340" height="730" data-lazy="images/reviews/top/1.webp" alt="Отзыв 1"></div>
                                    <div class="item"><img data-lazy="images/reviews/top/2.webp" alt="Отзыв 2"></div>
                                    <div class="item"><img data-lazy="images/reviews/top/3.webp" alt="Отзыв 3"></div>
                                    <div class="item"><img data-lazy="images/reviews/top/4.webp" alt="Отзыв 4"></div>
                                </div>
                                <div class="device-slider__phone"><img src="images/device-slider/iphone.webp" alt="Телефон"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section--theme-yellow overflow-hidden">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 p-relative">
                        <div class="prices__sale lazy" data-bg="images/prices/sale.svg"><span class="d-block h2"><b>-54%</b></span> <date class="dd">до 14</date> <date class="mm">ноября</date></div>
                        <h2 class="h1"><b>Стоимость тренинга</b></h2>
                        <div class="prices-list h5">
                            <div class="prices-list__item"><img class="lazy" data-src="images/prices/1.webp" alt="Первый платеж через 30 дней">
                                <div class="prices-list__text">Первый платеж<b> через 30 дней</b></div>
                            </div>
                            <div class="prices-list__item ai-start"><img class="lazy" data-src="images/prices/2.webp" alt="Рассрочка без скидки 5200 руб./мес.">
                                <div class="prices-list__text d-xxl-flex pt-1"><b>2715 руб./мес.</b>
                                    <div class="prices-list__disabled">Рассрочка без скидки 5200 руб./мес.</div>
                                </div>
                            </div>
                            <div class="prices-list__item ai-start"><img class="lazy" data-src="images/prices/3.webp" alt="">
                                <div class="prices-list__text"><b>6 дней</b> по 2 часа интенсивной прокачки</div>
                            </div>
                            <div class="prices-list__item ai-start"><img class="lazy" data-src="images/prices/4.webp" alt="Разбор консультанта с полным сопровождением до результата">
                                <div class="prices-list__text">
                                	<b>Разборы практических</b><span class="d-block"><b>заданий</b> с обратной связью консультанта</span>
                                </div>
                            </div>
                            <div class="prices-list__item ai-start"><img class="lazy" data-src="images/prices/5.webp" alt="31 готовый документ (регламенты, политики и должностные инструкции)">
                                <div class="prices-list__text">31 готовый документ<b> (регламенты, политики и должностные инструкции)</b></div>
                            </div>
                        </div><a class="btn prices__button btn--arrow btn--hover-black" href="#feedback" rel="modal:open">Записаться</a> </div>
                    <div class="col-md-6">
                        <div class="prices__right mt-md-0 mt-4"> <img class="w-100 lazy" data-src="images/prices/persone.webp" alt="Александр Высоцкий">
                            <div class="prices__cv">
                                <div class="mb-2">
                                    <div class="h5 mb-1"><b>Александр Высоцкий</b></div>
                                    <div class="prices__cv-sub">Основатель Visotsky Consulting</div>
                                </div>
                                <p class="m-0">Создатель Edtech проекта для предпринимателей №2 по рейтингу РБК в 2021 году</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="h1 mb-25"><b>Комплект из 31 документа</b> включает<span class="b-md-block"> в себя инструкции, регламенты, политики, планы</span></h2>
                        <p class="mb-30">Вы получите документы, разработанные нашими консультантами, которые мы используем сами в своей работе.</p>
                        <p class="mb-0">
                            <div class="smb-yellow-text me-2"><b>На 90% готовые документы.</b></div>Адаптируете под себя и сразу же используете в работе. </p>
                        <div class="mt-5 pb-4"><a class="btn" href="#prizes" rel="modal:open">Посмотреть подарок</a></div>
                    </div>
                    <div class="col-6 d-md-block d-none"><img class="w-100 lazy" data-src="images/documents/bg.webp" alt="Комплект из 31 документа"></div>
                </div>
                <div class="mt-5 text-center">
                    <div class="row-cols-md-4 row-cols-sm-3 row-cols-2 row gy-2 jc-center">
                        <div class="col"><img class="lazy" data-src="images/documents/1.svg" alt="7 должностных инструкции основных руководителей">
                            <div class="mt-3">должностных инструкции основных руководителей</div>
                        </div>
                        <div class="col"><img class="lazy" data-src="images/documents/2.svg" alt="Инструкций по внедрению инструментов управления">
                            <div class="mt-3">инструкций по внедрению инструментов управления</div>
                        </div>
                        <div class="col"><img class="lazy" data-src="images/documents/3.svg" alt="Регламентов по оперативным и тактическим планам">
                            <div class="mt-3">регламентов по оперативным и тактическим планам</div>
                        </div>
                        <div class="col"><img class="lazy" data-src="images/documents/4.svg" alt="Бланков для разной отчетности">
                            <div class="mt-3">бланков для разной<span class="d-block"> отчетности</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section--theme-dark" id="proccess">
            <div class="container">
                <div class="row gx-5 jc-lg-between">
                    <div class="col-lg-6 col-sm-7 col-10">
                        <h2 class="h1 mb-5"><span class="d-md-block"><b>Как проходит</b></span><b> тренинг?</b></h2>
                        <div class="training__img d-lg-block d-none"><img class="w-100 lazy" data-src="images/traning/bg.webp" alt="Как проходит тренинг?"></div>
                    </div>
                    <div class="col-lg-5">
                        <ul class="list-circle list-null training__list">
                            <li>
                                <div class="list-circle__top h5">
                                    <div class="list-circle__icon">
                                        <div class="list-circle__icon-number"></div>
                                    </div><b>Удобная онлайн платформа для обучения</b> </div>Записи всех занятий хранятся в вашем личном кабинете. Там же выполняете практические задания и получаете обратную связь от консультантов. </li>
                            <li>
                                <div class="list-circle__top h5">
                                    <div class="list-circle__icon">
                                        <div class="list-circle__icon-number"></div>
                                    </div><b>Доступ к записям на 1 год</b> </div>Все записи будут вам доступны еще в течение 1 года если вы захотите пересмотреть их. </li>
                            <li>
                                <div class="list-circle__top h5">
                                    <div class="list-circle__icon">
                                        <div class="list-circle__icon-number"></div>
                                    </div><b>Записи прошедших занятий</b> </div>Если не сможете быть на живом эфире, то записи загружаются в личный кабинет и вы ничего не пропустите. </li>
                            <li>
                                <div class="list-circle__top h5">
                                    <div class="list-circle__icon">
                                        <div class="list-circle__icon-number"></div>
                                    </div><b>По каждому дню - практическое задание</b> </div>1 практическое задание каждый день, чтобы закрепить материал и провести диагностику своего бизнеса. </li>
                            <li>
                                <div class="list-circle__top h5">
                                    <div class="list-circle__icon">
                                        <div class="list-circle__icon-number"></div>
                                    </div><b>Консультант делает профессиональный разбор заданий</b> </div>Каждый бизнес индивидуален. У каждого владельца есть свои вопросы. Консультант поможет разобраться и ответит на ваши вопросы. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" id="programm">
            <div class="container programm-block">
                <div class="mb-35">
                    <h2 class="h1"><b>Программа тренинга</b></h2>
                </div>
                <div class="row gy-3 gx-md-3 row-cols-xl-3 row-cols-sm-2 row-cols-1">
                    <div class="programm-block__unit col">
                        <div class="d-flex ai-center mb-4">
                            <div class="me-3"><img class="lazy" data-src="images/steps/1.svg" alt="Программа тренинга"></div>
                            <div class="col-item"><small class="opacity-6">День 1</small>
                                <div class="h5"><b class="d-sm-block">Эволюция</b><b>владельца бизнеса</b></div>
                            </div>
                        </div>
                        <div class="programm-block__unit__more-information">
                            <div class="programm-block__unit__more-information__button">
                                <p>Программа</p>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="17" fill="#FDD303"/>
                                    <line x1="8" y1="17" x2="26" y2="17" stroke="black" stroke-width="2"/>
                                    <line class="more-information__close-button" x1="17" y1="8" x2="17" y2="26" stroke="black" stroke-width="2"/>
                                </svg>
                            </div>
                            <ul class="list-rhombus-small programm-block__unit__more-information__description">
                                <li>Как определить главный результат деятельности всего бизнеса</li>
                                <li>Ценный конечный продукт на уровне сотрудника, руководителя, компании</li>
                                <li>Роль оргсхемы в ускорении бизнес-процессов: как она влияет на эффективность и производительность каждого подразделения и отдельного сотрудника</li>
                                <li>Как построить организующую схему компании на основе 7 ключевых функций компании</li>
                            </ul>
                        </div>
                        <ul class="list-rhombus-small list-null">
                            <h5> <b>Ваш результат</b></h5>
                            <li>Путь, который проходит владелец бизнеса от идеи бизнеса до крупной корпорации и какие сложности возникают на каждом этапе</li>
                            <li>Как меняются функции владельца в зависимости от стадии развития бизнеса</li>
                            <li>Какие частые ошибки совершают совладельцы и как избежать проблем в партнёрстве</li>
                        </ul>
                    </div>
                    <div class="programm-block__unit col">
                        <div class="d-flex ai-center mb-4">
                            <div class="me-3"><img class="lazy" data-src="images/steps/2.svg" alt="Оргсхема, система быстрого потока, найм и скорость роста"></div>
                            <div class="col-item"><small class="opacity-6">День 2</small>
                                <div class="h5"><b>Оргсхема, система быстрого потока, найм и скорость роста</b></div>
                            </div>
                        </div>
                        <div class="programm-block__unit__more-information">
                            <div class="programm-block__unit__more-information__button">
                                <p>Программа</p>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="17" fill="#FDD303"/>
                                    <line x1="8" y1="17" x2="26" y2="17" stroke="black" stroke-width="2"/>
                                    <line class="more-information__close-button" x1="17" y1="8" x2="17" y2="26" stroke="black" stroke-width="2"/>
                                </svg>
                            </div>
                            <ul class="list-rhombus-small programm-block__unit__more-information__description">
                                <li>Как определить главный результат деятельности всего бизнеса</li>
                                <li>Ценный конечный продукт на уровне сотрудника, руководителя, компании</li>
                                <li>Роль оргсхемы в ускорении бизнес-процессов: как она влияет на эффективность и производительность каждого подразделения и отдельного сотрудника</li>
                                <li>Как построить организующую схему компании на основе 7 ключевых функций компании</li>
                            </ul>
                        </div>
                        <ul class="list-rhombus-small list-null">
                            <li>Роль оргструктуры: как она влияет на эффективность и производительность каждого подразделения и отдельного сотрудника</li>
                            <li>Какой должна быть оргструктура именно в вашей компании</li>
                            <li>Какие подразделения должны быть в компании, как они должны взаимодействовать между собой и какие у них функции</li>
                            <li>Как выглядят организационные структуры успешных корпораций</li>
                            <li>Как ускорить найм и введение в должность нового сотрудника</li>
                        </ul>
                    </div>
                    <div class="programm-block__unit col">
                        <div class="d-flex ai-center mb-4">
                            <div class="me-3"><img class="lazy" data-src="images/steps/3.svg" alt="Оргсхема, система быстрого потока, найм и скорость роста"></div>
                            <div class="col-item"><small class="opacity-6">День 3</small>
                                <div class="h5"><b>Система измерения результатов, ИЦО и его анализ</b></div>
                            </div>
                        </div>
                        <div class="programm-block__unit__more-information">
                            <div class="programm-block__unit__more-information__button">
                                <p>Программа</p>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="17" fill="#FDD303"/>
                                    <line x1="8" y1="17" x2="26" y2="17" stroke="black" stroke-width="2"/>
                                    <line class="more-information__close-button" x1="17" y1="8" x2="17" y2="26" stroke="black" stroke-width="2"/>
                                </svg>
                            </div>
                            <ul class="list-rhombus-small programm-block__unit__more-information__description">
                                <li>Как определить главный результат деятельности всего бизнеса</li>
                                <li>Ценный конечный продукт на уровне сотрудника, руководителя, компании</li>
                                <li>Роль оргсхемы в ускорении бизнес-процессов: как она влияет на эффективность и производительность каждого подразделения и отдельного сотрудника</li>
                                <li>Как построить организующую схему компании на основе 7 ключевых функций компании</li>
                            </ul>
                        </div>
                        <ul class="list-rhombus-small list-null">
                            <li>Какой должна быть система измерения результатов: как она должна работать и как правильно её использовать</li>
                            <li>Как измерять результат работы сотрудников</li>
                            <li>Как измерять эффективность рабочего времени сотрудника и как отслеживать улучшение или ухудшение результатов</li>
                            <li>На что ориентироваться при поощрении или наказании сотрудников</li>
                            <li>Что такое «Информационный Центр Организации» и как использовать этот инструмент для анализа узких мест в компании</li>
                        </ul>
                    </div>
                    <div class="programm-block__unit col">
                        <div class="d-flex ai-center mb-4">
                            <div class="me-3"><img class="lazy" data-src="images/steps/4.svg" alt="Планирование и координация"></div>
                            <div class="col-item"><small class="opacity-6">День 4</small>
                                <div class="h5"><b>Планирование и координация</b></div>
                            </div>
                        </div>
                        <div class="programm-block__unit__more-information">
                            <div class="programm-block__unit__more-information__button">
                                <p>Программа</p>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="17" fill="#FDD303"/>
                                    <line x1="8" y1="17" x2="26" y2="17" stroke="black" stroke-width="2"/>
                                    <line class="more-information__close-button" x1="17" y1="8" x2="17" y2="26" stroke="black" stroke-width="2"/>
                                </svg>
                            </div>
                            <ul class="list-rhombus-small programm-block__unit__more-information__description">
                                <li>Как определить главный результат деятельности всего бизнеса</li>
                                <li>Ценный конечный продукт на уровне сотрудника, руководителя, компании</li>
                                <li>Роль оргсхемы в ускорении бизнес-процессов: как она влияет на эффективность и производительность каждого подразделения и отдельного сотрудника</li>
                                <li>Как построить организующую схему компании на основе 7 ключевых функций компании</li>
                            </ul>
                        </div>
                        <ul class="list-rhombus-small list-null">
                            <li>Как сделать работу каждого сотрудника и руководителя более осознанной</li>
                            <li>Что нужно сделать, для того чтобы сотрудники самостоятельно планировали свою деятельность и старались добиваться максимальных результатов</li>
                            <li>Как измерять эффективность рабочего времени сотрудника и как отслеживать улучшение или ухудшение результатов</li>
                            <li>Какой должна быть система планирования, чтобы сотрудники выкладывались по максимуму, а руководители принимали эффективные решения</li>
                            <li>Какие инструменты нужны для эффективного планирования и как правильно их применять</li>
                        </ul>
                    </div>
                    <div class="programm-block__unit col">
                        <div class="d-flex ai-center mb-4">
                            <div class="me-3"><img class="lazy" data-src="images/steps/5.svg" alt="Управление финансами"></div>
                            <div class="col-item"><small class="opacity-6">День 5</small>
                                <div class="h5"><b class="d-sm-block">Управление</b><b> финансами</b></div>
                            </div>
                        </div>
                        <div class="programm-block__unit__more-information">
                            <div class="programm-block__unit__more-information__button">
                                <p>Программа</p>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="17" fill="#FDD303"/>
                                    <line x1="8" y1="17" x2="26" y2="17" stroke="black" stroke-width="2"/>
                                    <line class="more-information__close-button" x1="17" y1="8" x2="17" y2="26" stroke="black" stroke-width="2"/>
                                </svg>
                            </div>
                            <ul class="list-rhombus-small programm-block__unit__more-information__description">
                                <li>Как определить главный результат деятельности всего бизнеса</li>
                                <li>Ценный конечный продукт на уровне сотрудника, руководителя, компании</li>
                                <li>Роль оргсхемы в ускорении бизнес-процессов: как она влияет на эффективность и производительность каждого подразделения и отдельного сотрудника</li>
                                <li>Как построить организующую схему компании на основе 7 ключевых функций компании</li>
                            </ul>
                        </div>
                        <ul class="list-rhombus-small list-null">
                            <li>Распространённые ошибки 99% владельцев бизнеса в финансах, из-за которых владельцы не получают дивиденды и при этом несут все риски</li>
                            <li>Как в идеале должна работать система управления финансами</li>
                            <li>Что нужно сделать, для того чтобы руководители взяли на себя ответственность за финансы компании и боролись за рост дохода</li>
                        </ul>
                    </div>
                    <div class="programm-block__unit col">
                        <div class="d-flex ai-center mb-4">
                            <div class="me-3"><img class="lazy" data-src="images/steps/5.svg" alt="Как внедрять изменения"></div>
                            <div class="col-item"><small class="opacity-6">День 6</small>
                                <div class="h5"><b class="d-sm-block">Как внедрять</b><b> изменения</b></div>
                            </div>
                        </div>
                        <div class="programm-block__unit__more-information">
                            <div class="programm-block__unit__more-information__button">
                                <p>Программа</p>
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="17" cy="17" r="17" fill="#FDD303"/>
                                    <line x1="8" y1="17" x2="26" y2="17" stroke="black" stroke-width="2"/>
                                    <line class="more-information__close-button" x1="17" y1="8" x2="17" y2="26" stroke="black" stroke-width="2"/>
                                </svg>
                            </div>
                            <ul class="list-rhombus-small programm-block__unit__more-information__description">
                                <li>Как определить главный результат деятельности всего бизнеса</li>
                                <li>Ценный конечный продукт на уровне сотрудника, руководителя, компании</li>
                                <li>Роль оргсхемы в ускорении бизнес-процессов: как она влияет на эффективность и производительность каждого подразделения и отдельного сотрудника</li>
                                <li>Как построить организующую схему компании на основе 7 ключевых функций компании</li>
                            </ul>
                        </div>
                        <ul class="list-rhombus-small list-null">
                            <li>Какие ошибки совершают владельцы бизнеса при попытке самостоятельно построить систему управления и как их избежать</li>
                            <li>Как не разрушить уже работающие процессы в компании и не потерять ценных сотрудников при построении системы в бизнесе</li>
                            <li>Как правильно объединить инструменты управления в единую систему</li>
                            <li>Как и в какой последовательности необходимо строить систему в бизнесе</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" id="video">
            <div class="container">
                <div class="video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KYUF2kzjfis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
        <section class="section section--theme-yellow">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 p-relative">
                        <h2 class="h1"><b>Стоимость тренинга</b></h2>
                        <div class="h3"><b>“Система эффективного бизнеса”</b></div>
                        <div class="prices-list h5">
                            <div class="prices-list__item">
                                <img class="lazy" data-src="images/prices/1-1.webp" alt="6 дней тренинга">
                                <div class="prices-list__text">
                                    <b>6 дней тренинга</b>с разбором элементов системы масштабирования от Александра Высоцкого
                                </div>
                            </div>
                            <div class="prices-list__item ai-start">
                                <img class="lazy" data-src="images/prices/1-2.webp" alt="9+ инструментов управления бизнесом">
                                <div class="prices-list__text">
                                    <b>9+</b> инструментов управления бизнесом (найм, финансы, статистики, планирование и др.)
                                </div>
                            </div>
                            <div class="prices-list__item ai-start">
                                <img class="lazy" data-src="images/prices/1-3.webp" alt="по 2 часа интенсивной прокачки">
                                <div class="prices-list__text">
                                    <b>Разборы практических заданий</b> с обратной связью консультанта
                                </div>
                            </div>
                            <div class="prices-list__item ai-start">
                                <img class="lazy" data-src="images/prices/1-4.webp" alt="Разбор консультанта с полным сопровождением до результата">
                                <div class="prices-list__text">
                                    <b>31 готовый документ</b> (регламенты, политики и должностные инструкции)
                                </div>
                            </div>
                            <div class="prices-list__item ai-start">
                                <img class="lazy" data-src="images/prices/1-5.webp" alt="31 готовый документ (регламенты, политики и должностные инструкции)">
                                <div class="prices-list__text">
                                    <b>Доступ</b> к записям тренинга <b>на год</b>
                                </div>
                            </div>
                        </div>
                        <a class="btn prices__button btn--arrow btn--hover-black" href="#feedback" rel="modal:open">Записаться</a> </div>
                    <div class="col-md-6">
                        <div class="prices__right">
                            <svg width="461" height="610" viewBox="0 0 461 610" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10.9961" y="590" width="440" height="10" fill="white" fill-opacity="0.2"/>
                                <rect x="20.9961" y="600" width="420" height="10" fill="white" fill-opacity="0.1"/>
                                <rect x="0.996094" width="460" height="590" fill="#FEE04E"/>
                                <path d="M397 0H461V64L429.865 33.7297L397 0Z" fill="#FDD303"/>
                                <path d="M461 64H397V0L428.135 30.2703L461 64Z" fill="#E1C333"/>
                            </svg>
                            <div class="prices__right__text">
                                <div class="prices__right__text__credit">
                                    <div class="h4">В рассрочку на год:</div>
                                    <div class="h1"><b>2 715 <span>руб./мес.</span></b></div>
                                </div>
                                <div class="prices__right__text__full-price">
                                    <div class="h4">Полная стоимость сегодня:</div>
                                    <div class="h1"><b>29 000 <span>руб.</span></b></div>
                                    <div class="h2"><b>49 000 <span>руб.</span></b></div>
                                </div>
                                <div class="h4">Старт тренинга: 14 февраля</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section--theme-dark results overflow-hidden lazy" data-bg="images/results/bg.webp" id="results">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="mb-35">
                            <h2 class="h1">В результате<b> 6-дневного тренинга вы:</b></h2>
                        </div>
                        <div class="results-list row gy-3 row-cols-lg-1 row-cols-md-3 row-cols-1">
                            <div class="col">
                                <div class="results-list__item"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewbox="0 0 32 28" fill="none"> <path d="M3.51644 4.73233C3.73775 2.70308 5.45157 1.16602 7.49286 1.16602H25.6898C28.0706 1.16602 29.9244 3.23292 29.6663 5.5997L27.7825 22.8715C27.5612 24.9008 25.8474 26.4378 23.8061 26.4378H5.60914C3.22833 26.4378 1.3746 24.3709 1.63272 22.0041L3.51644 4.73233Z" stroke="#FDD303" stroke-width="2"></path> <path d="M13.9682 19.1626C13.8311 19.3004 13.6442 19.3774 13.4499 19.3774C13.2556 19.3774 13.0686 19.3004 12.9315 19.1626L8.79196 15.0223C8.36232 14.5927 8.36232 13.8961 8.79196 13.4672L9.31032 12.9489C9.73997 12.5192 10.4358 12.5192 10.8654 12.9489L13.4499 15.5333L20.4334 8.54977C20.8631 8.12013 21.5596 8.12013 21.9885 8.54977L22.5069 9.06813C22.9365 9.49778 22.9365 10.1943 22.5069 10.6232L13.9682 19.1626Z" fill="#FDD303"></path> </svg>Получите
                                    чёткое понимание, какой должна быть система в бизнесе. Вы сможете ясно представить,<b> куда вы идёте и как масштабировать свой бизнес.</b> </div>
                            </div>
                            <div class="col">
                                <div class="col-12">
                                    <div class="results-list__item"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewbox="0 0 32 28" fill="none"> <path d="M3.51644 4.73233C3.73775 2.70308 5.45157 1.16602 7.49286 1.16602H25.6898C28.0706 1.16602 29.9244 3.23292 29.6663 5.5997L27.7825 22.8715C27.5612 24.9008 25.8474 26.4378 23.8061 26.4378H5.60914C3.22833 26.4378 1.3746 24.3709 1.63272 22.0041L3.51644 4.73233Z" stroke="#FDD303" stroke-width="2"></path> <path d="M13.9682 19.1626C13.8311 19.3004 13.6442 19.3774 13.4499 19.3774C13.2556 19.3774 13.0686 19.3004 12.9315 19.1626L8.79196 15.0223C8.36232 14.5927 8.36232 13.8961 8.79196 13.4672L9.31032 12.9489C9.73997 12.5192 10.4358 12.5192 10.8654 12.9489L13.4499 15.5333L20.4334 8.54977C20.8631 8.12013 21.5596 8.12013 21.9885 8.54977L22.5069 9.06813C22.9365 9.49778 22.9365 10.1943 22.5069 10.6232L13.9682 19.1626Z" fill="#FDD303"></path> </svg><b>Будете понимать</b>                                        как работает каждый отдельный инструмент и как они взаимодействуют друг с другом. </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="col-12">
                                    <div class="results-list__item"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewbox="0 0 32 28" fill="none"> <path d="M3.51644 4.73233C3.73775 2.70308 5.45157 1.16602 7.49286 1.16602H25.6898C28.0706 1.16602 29.9244 3.23292 29.6663 5.5997L27.7825 22.8715C27.5612 24.9008 25.8474 26.4378 23.8061 26.4378H5.60914C3.22833 26.4378 1.3746 24.3709 1.63272 22.0041L3.51644 4.73233Z" stroke="#FDD303" stroke-width="2"></path> <path d="M13.9682 19.1626C13.8311 19.3004 13.6442 19.3774 13.4499 19.3774C13.2556 19.3774 13.0686 19.3004 12.9315 19.1626L8.79196 15.0223C8.36232 14.5927 8.36232 13.8961 8.79196 13.4672L9.31032 12.9489C9.73997 12.5192 10.4358 12.5192 10.8654 12.9489L13.4499 15.5333L20.4334 8.54977C20.8631 8.12013 21.5596 8.12013 21.9885 8.54977L22.5069 9.06813C22.9365 9.49778 22.9365 10.1943 22.5069 10.6232L13.9682 19.1626Z" fill="#FDD303"></path> </svg>Перестанете
                                        строить бизнес вслепую и будете осознавать, что вы делаете и для чего вы это делаете.<b> Действия станут точными, а результат предсказуемым.</b> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-5 p-relative d-lg-block d-none"><img class="results__image lazy" data-src="images/results/mac.webp" alt="В результате 6-дневного тренинга вы:"></div>
                </div>
                <div class="mt-5">
                    <div class="row row-cols-md-3 row-cols-1 gy-2">
                        <div class="col">
                            <div class="results-list__item"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewbox="0 0 32 28" fill="none"> <path d="M3.51644 4.73233C3.73775 2.70308 5.45157 1.16602 7.49286 1.16602H25.6898C28.0706 1.16602 29.9244 3.23292 29.6663 5.5997L27.7825 22.8715C27.5612 24.9008 25.8474 26.4378 23.8061 26.4378H5.60914C3.22833 26.4378 1.3746 24.3709 1.63272 22.0041L3.51644 4.73233Z" stroke="#FDD303" stroke-width="2"></path> <path d="M13.9682 19.1626C13.8311 19.3004 13.6442 19.3774 13.4499 19.3774C13.2556 19.3774 13.0686 19.3004 12.9315 19.1626L8.79196 15.0223C8.36232 14.5927 8.36232 13.8961 8.79196 13.4672L9.31032 12.9489C9.73997 12.5192 10.4358 12.5192 10.8654 12.9489L13.4499 15.5333L20.4334 8.54977C20.8631 8.12013 21.5596 8.12013 21.9885 8.54977L22.5069 9.06813C22.9365 9.49778 22.9365 10.1943 22.5069 10.6232L13.9682 19.1626Z" fill="#FDD303"></path> </svg>Посмотрите
                                на свою компанию со стороны и поймете, что у вас работает хорошо, а что требует<b> «докрутки» или построения с нуля.</b> </div>
                        </div>
                        <div class="col">
                            <div class="results-list__item"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewbox="0 0 32 28" fill="none"> <path d="M3.51644 4.73233C3.73775 2.70308 5.45157 1.16602 7.49286 1.16602H25.6898C28.0706 1.16602 29.9244 3.23292 29.6663 5.5997L27.7825 22.8715C27.5612 24.9008 25.8474 26.4378 23.8061 26.4378H5.60914C3.22833 26.4378 1.3746 24.3709 1.63272 22.0041L3.51644 4.73233Z" stroke="#FDD303" stroke-width="2"></path> <path d="M13.9682 19.1626C13.8311 19.3004 13.6442 19.3774 13.4499 19.3774C13.2556 19.3774 13.0686 19.3004 12.9315 19.1626L8.79196 15.0223C8.36232 14.5927 8.36232 13.8961 8.79196 13.4672L9.31032 12.9489C9.73997 12.5192 10.4358 12.5192 10.8654 12.9489L13.4499 15.5333L20.4334 8.54977C20.8631 8.12013 21.5596 8.12013 21.9885 8.54977L22.5069 9.06813C22.9365 9.49778 22.9365 10.1943 22.5069 10.6232L13.9682 19.1626Z" fill="#FDD303"></path> </svg>Будете
                                способны самостоятельно составить план по развитию бизнеса и точно знать, в какой последовательности<b> необходимо внедрять изменения.</b> </div>
                        </div>
                        <div class="col">
                            <div class="results-list__item"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewbox="0 0 32 28" fill="none"> <path d="M3.51644 4.73233C3.73775 2.70308 5.45157 1.16602 7.49286 1.16602H25.6898C28.0706 1.16602 29.9244 3.23292 29.6663 5.5997L27.7825 22.8715C27.5612 24.9008 25.8474 26.4378 23.8061 26.4378H5.60914C3.22833 26.4378 1.3746 24.3709 1.63272 22.0041L3.51644 4.73233Z" stroke="#FDD303" stroke-width="2"></path> <path d="M13.9682 19.1626C13.8311 19.3004 13.6442 19.3774 13.4499 19.3774C13.2556 19.3774 13.0686 19.3004 12.9315 19.1626L8.79196 15.0223C8.36232 14.5927 8.36232 13.8961 8.79196 13.4672L9.31032 12.9489C9.73997 12.5192 10.4358 12.5192 10.8654 12.9489L13.4499 15.5333L20.4334 8.54977C20.8631 8.12013 21.5596 8.12013 21.9885 8.54977L22.5069 9.06813C22.9365 9.49778 22.9365 10.1943 22.5069 10.6232L13.9682 19.1626Z" fill="#FDD303"></path> </svg><b>Повысите свою компетентность</b>                                как владелец бизнеса и будете принимать более эффективные решения по развитию своей компании. </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="row ai-center jc-center gy-2">
                    <div class="col-md-6">
                        <h2 class="h1 mb-35"><b>Александр Высоцкий</b></h2>
                        <ul class="list-rhombus list-null author__list">
                            <li> <b>Основатель и владелец</b> консалтинговой компании Visotsky Consulting с 6 офисами в СНГ, США (Нью-Йорк) и на острове Тайвань. </li>
                            <li> <b> 26 лет в бизнесе.</b> Основал и продал крупнейшую в Европе компанию по производству медалей и наград Герольдмастер. Владелец группы компании с оборотом более 1 млрд рублей в год. </li>
                            <li> <b> Создал Edtech</b> проект для предпринимателей №2 по рейтингу РБК в 2021 году. </li>
                            <li> Разработал 12-и месячный консалтинговый проект по систематизации бизнеса, который за <b> 12 лет завершили 1073 компании</b> </li>
                            <li> Основал компанию, которая за 12 лет наладила бизнес-процессы и внедрил инструменты управления в компаниях с оборотом <b> от 30 млн до 2.5 млрд рублей в год</b>. Суммарный оборот компании клиентов более 200 млрд рублей. </li>
                            <li>
                            Автор 4 книг-бестселлеров о системе управления и обязанностях владельца бизнеса с общим тиражем в <b> <br>70 000 проданных книг</b> </li>
                            <li> Автор публикаций в журналах и интернет-изданиях <b> Forbes, РБК Pro,</b> Деловая среда, Финансовый директор, Генеральный директор </li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-10"><img class="w-100 lazy" data-src="images/author/1.webp" alt="Александр Высоцкий"></div>
                </div>
            </div>
        </section>
        <section class="section prize">
            <div class="container">
                <h2 class="h1 mb-35"><b>Премия бренд года</b></h2>
                <div class="p-relative">
                    <div class="d-md-none mb-3"><b>Visotsky Consulting - лучшая консалтинговая компания</b> 2015, 2016, 2017 по версии “Украинской народной премии”</div><img class="w-100 lazy" data-src="images/prize/bg.webp" alt="Премия бренд года">
                    <div class="prize__notify d-md-flex d-none lazy"
                        data-bg="images/prize/notify.svg">
                        <div><b>Visotsky Consulting - лучшая консалтинговая компания</b> 2015, 2016, 2017 по версии “Украинской народной премии”</div>
                    </div>
                    <div class="prize__alert"><span><b>Visotsky Consulting обладатель</b><span class="smb-yellow-text"><b>более 19</b></span><b> национальных наград</b> с 2014 года среди которых звания “Бренд года”, “Лучшее корпоративное медиа”, “Фавориты успеха”, “Звезда качества”,
                        “Лидер отрасли”, “Лидер года”, “Выбор Украины”</span>
                        <div><a class="btn" href="#prizes-all" rel="modal:open">Посмотреть все награды</a></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section cases">
            <div class="container">
                <div class="mb-md-5 mb-3">
                    <h2 class="h2"><b>Кейсы клиентов, прошедших годовые консалтинговые программы</b></h2>
                </div>
            </div>
            <div>
                <div class="case__col">
                    <div class="container">
                        <div class="h3 mb-25"><b>Анатолий Тельбух. Владелец компании TCO, г. Харьков, Украина</b></div>
                        <div class="row jc-center">
                            <div class="col-md-4 col-sm-6 col-8">
                                <div class="mb-25"><img class="w-100 lazy" data-src="images/cases/1.webp" alt="Анатолий Тельбух. Владелец компании TCO, г. Харьков, Украина"></div><img class="w-100 lazy" data-src="images/cases/2.webp" alt="Анатолий Тельбух. Владелец компании TCO, г. Харьков, Украина">                                </div>
                            <div class="col-md-8">
                                <div class="h-100 d-flex jc-between flex-column case__content">
                                    <div class="col-item">
                                        <div class="h4"><b>Состояние на 2009 год</b></div>
                                        <ul class="case__list list-null">
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewbox="0 0 29 25" fill="none"> <path d="M3.21128 4.56632C3.4326 2.53706 5.14642 1 7.1877 1H22.8104C25.1912 1 27.045 3.06691 26.7868 5.43368L25.1741 20.2209C24.9528 22.2502 23.239 23.7872 21.1977 23.7872H5.57497C3.19416 23.7872 1.34042 21.7203 1.59854 19.3536L3.21128 4.56632Z" stroke="#E92020" stroke-width="2"></path> <rect x="10.623" y="5.74023" width="14.8334" height="2.83164" rx="0.75" transform="rotate(50.9761 10.623 5.74023)" fill="#E92020"></rect> <rect width="14.8334" height="2.83164" rx="0.75" transform="matrix(-0.707107 0.707107 0.707107 0.707107 18.4365 6.14844)" fill="#E92020"></rect> </svg>15
                                                сотрудников под ручным управлением </li>
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewbox="0 0 29 25" fill="none"> <path d="M3.21128 4.56632C3.4326 2.53706 5.14642 1 7.1877 1H22.8104C25.1912 1 27.045 3.06691 26.7868 5.43368L25.1741 20.2209C24.9528 22.2502 23.239 23.7872 21.1977 23.7872H5.57497C3.19416 23.7872 1.34042 21.7203 1.59854 19.3536L3.21128 4.56632Z" stroke="#E92020" stroke-width="2"></path> <rect x="10.623" y="5.74023" width="14.8334" height="2.83164" rx="0.75" transform="rotate(50.9761 10.623 5.74023)" fill="#E92020"></rect> <rect width="14.8334" height="2.83164" rx="0.75" transform="matrix(-0.707107 0.707107 0.707107 0.707107 18.4365 6.14844)" fill="#E92020"></rect> </svg>Дом
                                                был заложен в кредит под нужды бизнеса </li>
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewbox="0 0 29 25" fill="none"> <path d="M3.21128 4.56632C3.4326 2.53706 5.14642 1 7.1877 1H22.8104C25.1912 1 27.045 3.06691 26.7868 5.43368L25.1741 20.2209C24.9528 22.2502 23.239 23.7872 21.1977 23.7872H5.57497C3.19416 23.7872 1.34042 21.7203 1.59854 19.3536L3.21128 4.56632Z" stroke="#E92020" stroke-width="2"></path> <rect x="10.623" y="5.74023" width="14.8334" height="2.83164" rx="0.75" transform="rotate(50.9761 10.623 5.74023)" fill="#E92020"></rect> <rect width="14.8334" height="2.83164" rx="0.75" transform="matrix(-0.707107 0.707107 0.707107 0.707107 18.4365 6.14844)" fill="#E92020"></rect> </svg>Едва
                                                нашел деньги на прохождение годовой программы </li>
                                        </ul>
                                    </div>
                                    <div class="mt-4">
                                        <div class="h4"><b>Результаты после прохождения программы</b></div>
                                        <ul class="case__list case__list--check list-null">
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewbox="0 0 29 26" fill="none"> <path d="M3.21128 5.37687C3.4326 3.34761 5.14642 1.81055 7.1877 1.81055H22.8104C25.1912 1.81055 27.045 3.87745 26.7868 6.24423L25.1741 21.0315C24.9528 23.0607 23.239 24.5978 21.1977 24.5978H5.57497C3.19416 24.5978 1.34042 22.5309 1.59854 20.1641L3.21128 5.37687Z" stroke="#00C01F" stroke-width="2"></path> <path d="M12.6645 18.0742C12.5399 18.1995 12.37 18.2695 12.1934 18.2695C12.0168 18.2695 11.8469 18.1995 11.7223 18.0742L7.95987 14.3102C7.56937 13.9196 7.56937 13.2863 7.95987 12.8964L8.431 12.4251C8.8215 12.0345 9.4539 12.0345 9.8444 12.4251L12.1934 14.7748L18.5407 8.42577C18.9312 8.03516 19.5643 8.03516 19.9541 8.42577L20.4253 8.89702C20.8158 9.28763 20.8158 9.92086 20.4253 10.3108L12.6645 18.0742Z" fill="#00C01F"></path> </svg>Доход
                                                вырос в 17 раз за 2 года после внедрения системы управления </li>
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewbox="0 0 29 26" fill="none"> <path d="M3.21128 5.37687C3.4326 3.34761 5.14642 1.81055 7.1877 1.81055H22.8104C25.1912 1.81055 27.045 3.87745 26.7868 6.24423L25.1741 21.0315C24.9528 23.0607 23.239 24.5978 21.1977 24.5978H5.57497C3.19416 24.5978 1.34042 22.5309 1.59854 20.1641L3.21128 5.37687Z" stroke="#00C01F" stroke-width="2"></path> <path d="M12.6645 18.0742C12.5399 18.1995 12.37 18.2695 12.1934 18.2695C12.0168 18.2695 11.8469 18.1995 11.7223 18.0742L7.95987 14.3102C7.56937 13.9196 7.56937 13.2863 7.95987 12.8964L8.431 12.4251C8.8215 12.0345 9.4539 12.0345 9.8444 12.4251L12.1934 14.7748L18.5407 8.42577C18.9312 8.03516 19.5643 8.03516 19.9541 8.42577L20.4253 8.89702C20.8158 9.28763 20.8158 9.92086 20.4253 10.3108L12.6645 18.0742Z" fill="#00C01F"></path> </svg>Сейчас
                                                компания № 1 в стране по производству школьной мебели и досок </li>
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewbox="0 0 29 26" fill="none"> <path d="M3.21128 5.37687C3.4326 3.34761 5.14642 1.81055 7.1877 1.81055H22.8104C25.1912 1.81055 27.045 3.87745 26.7868 6.24423L25.1741 21.0315C24.9528 23.0607 23.239 24.5978 21.1977 24.5978H5.57497C3.19416 24.5978 1.34042 22.5309 1.59854 20.1641L3.21128 5.37687Z" stroke="#00C01F" stroke-width="2"></path> <path d="M12.6645 18.0742C12.5399 18.1995 12.37 18.2695 12.1934 18.2695C12.0168 18.2695 11.8469 18.1995 11.7223 18.0742L7.95987 14.3102C7.56937 13.9196 7.56937 13.2863 7.95987 12.8964L8.431 12.4251C8.8215 12.0345 9.4539 12.0345 9.8444 12.4251L12.1934 14.7748L18.5407 8.42577C18.9312 8.03516 19.5643 8.03516 19.9541 8.42577L20.4253 8.89702C20.8158 9.28763 20.8158 9.92086 20.4253 10.3108L12.6645 18.0742Z" fill="#00C01F"></path> </svg>Валовый
                                                доход увеличивается ежегодно на 200–250% по сравнению с предыдущим </li>
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewbox="0 0 29 26" fill="none"> <path d="M3.21128 5.37687C3.4326 3.34761 5.14642 1.81055 7.1877 1.81055H22.8104C25.1912 1.81055 27.045 3.87745 26.7868 6.24423L25.1741 21.0315C24.9528 23.0607 23.239 24.5978 21.1977 24.5978H5.57497C3.19416 24.5978 1.34042 22.5309 1.59854 20.1641L3.21128 5.37687Z" stroke="#00C01F" stroke-width="2"></path> <path d="M12.6645 18.0742C12.5399 18.1995 12.37 18.2695 12.1934 18.2695C12.0168 18.2695 11.8469 18.1995 11.7223 18.0742L7.95987 14.3102C7.56937 13.9196 7.56937 13.2863 7.95987 12.8964L8.431 12.4251C8.8215 12.0345 9.4539 12.0345 9.8444 12.4251L12.1934 14.7748L18.5407 8.42577C18.9312 8.03516 19.5643 8.03516 19.9541 8.42577L20.4253 8.89702C20.8158 9.28763 20.8158 9.92086 20.4253 10.3108L12.6645 18.0742Z" fill="#00C01F"></path> </svg>Оснащены
                                                более 19000 учебных заведений Украины (в 1960 населенных пунктах), а также за рубежом </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="case__col">
                    <div class="container">
                        <div class="h3 mb-25"><b>Ляйля Сапаргалиева. Владелец компании “Сорбент”, г. Усть-Каменогорск, Казахстан</b></div>
                        <div class="row jc-center">
                            <div class="col-md-4 col-sm-6 col-8"><img class="w-100 lazy" data-src="images/cases/3.webp" alt="Ляйля Сапаргалиева. Владелец компании “Сорбент”, г. Усть-Каменогорск, Казахстан"></div>
                            <div class="col-md-8">
                                <div class="h-100 d-flex jc-between flex-column case__content">
                                    <div class="col-item">
                                        <div class="h4"><b>Состояние до программы</b></div>
                                        <ul class="case__list list-null">
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewbox="0 0 29 25" fill="none"> <path d="M3.21128 4.56632C3.4326 2.53706 5.14642 1 7.1877 1H22.8104C25.1912 1 27.045 3.06691 26.7868 5.43368L25.1741 20.2209C24.9528 22.2502 23.239 23.7872 21.1977 23.7872H5.57497C3.19416 23.7872 1.34042 21.7203 1.59854 19.3536L3.21128 4.56632Z" stroke="#E92020" stroke-width="2"></path> <rect x="10.623" y="5.74023" width="14.8334" height="2.83164" rx="0.75" transform="rotate(50.9761 10.623 5.74023)" fill="#E92020"></rect> <rect width="14.8334" height="2.83164" rx="0.75" transform="matrix(-0.707107 0.707107 0.707107 0.707107 18.4365 6.14844)" fill="#E92020"></rect> </svg>За
                                                дверью кабинета собиралась очередь из сотрудников. Все проблемы прилетали владельцу. </li>
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewbox="0 0 29 25" fill="none"> <path d="M3.21128 4.56632C3.4326 2.53706 5.14642 1 7.1877 1H22.8104C25.1912 1 27.045 3.06691 26.7868 5.43368L25.1741 20.2209C24.9528 22.2502 23.239 23.7872 21.1977 23.7872H5.57497C3.19416 23.7872 1.34042 21.7203 1.59854 19.3536L3.21128 4.56632Z" stroke="#E92020" stroke-width="2"></path> <rect x="10.623" y="5.74023" width="14.8334" height="2.83164" rx="0.75" transform="rotate(50.9761 10.623 5.74023)" fill="#E92020"></rect> <rect width="14.8334" height="2.83164" rx="0.75" transform="matrix(-0.707107 0.707107 0.707107 0.707107 18.4365 6.14844)" fill="#E92020"></rect> </svg>Самостоятельно
                                                занималась наймом сотрудников, проводила собеседования, тестирование и ввод в должность. </li>
                                        </ul>
                                    </div>
                                    <div class="mt-3">
                                        <div class="h4"><b>Результаты после прохождения программы</b></div>
                                        <ul class="case__list case__list--check list-null">
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewbox="0 0 29 26" fill="none"> <path d="M3.21128 5.37687C3.4326 3.34761 5.14642 1.81055 7.1877 1.81055H22.8104C25.1912 1.81055 27.045 3.87745 26.7868 6.24423L25.1741 21.0315C24.9528 23.0607 23.239 24.5978 21.1977 24.5978H5.57497C3.19416 24.5978 1.34042 22.5309 1.59854 20.1641L3.21128 5.37687Z" stroke="#00C01F" stroke-width="2"></path> <path d="M12.6645 18.0742C12.5399 18.1995 12.37 18.2695 12.1934 18.2695C12.0168 18.2695 11.8469 18.1995 11.7223 18.0742L7.95987 14.3102C7.56937 13.9196 7.56937 13.2863 7.95987 12.8964L8.431 12.4251C8.8215 12.0345 9.4539 12.0345 9.8444 12.4251L12.1934 14.7748L18.5407 8.42577C18.9312 8.03516 19.5643 8.03516 19.9541 8.42577L20.4253 8.89702C20.8158 9.28763 20.8158 9.92086 20.4253 10.3108L12.6645 18.0742Z" fill="#00C01F"></path> </svg>Руководители
                                                согласовывают недельные планы, расставляют приоритеты и сами устраняют оперативные проблемы. </li>
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewbox="0 0 29 26" fill="none"> <path d="M3.21128 5.37687C3.4326 3.34761 5.14642 1.81055 7.1877 1.81055H22.8104C25.1912 1.81055 27.045 3.87745 26.7868 6.24423L25.1741 21.0315C24.9528 23.0607 23.239 24.5978 21.1977 24.5978H5.57497C3.19416 24.5978 1.34042 22.5309 1.59854 20.1641L3.21128 5.37687Z" stroke="#00C01F" stroke-width="2"></path> <path d="M12.6645 18.0742C12.5399 18.1995 12.37 18.2695 12.1934 18.2695C12.0168 18.2695 11.8469 18.1995 11.7223 18.0742L7.95987 14.3102C7.56937 13.9196 7.56937 13.2863 7.95987 12.8964L8.431 12.4251C8.8215 12.0345 9.4539 12.0345 9.8444 12.4251L12.1934 14.7748L18.5407 8.42577C18.9312 8.03516 19.5643 8.03516 19.9541 8.42577L20.4253 8.89702C20.8158 9.28763 20.8158 9.92086 20.4253 10.3108L12.6645 18.0742Z" fill="#00C01F"></path> </svg>Вырастила
                                                3 заместителей директора и отошла от 90% оперативки. </li>
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewbox="0 0 29 26" fill="none"> <path d="M3.21128 5.37687C3.4326 3.34761 5.14642 1.81055 7.1877 1.81055H22.8104C25.1912 1.81055 27.045 3.87745 26.7868 6.24423L25.1741 21.0315C24.9528 23.0607 23.239 24.5978 21.1977 24.5978H5.57497C3.19416 24.5978 1.34042 22.5309 1.59854 20.1641L3.21128 5.37687Z" stroke="#00C01F" stroke-width="2"></path> <path d="M12.6645 18.0742C12.5399 18.1995 12.37 18.2695 12.1934 18.2695C12.0168 18.2695 11.8469 18.1995 11.7223 18.0742L7.95987 14.3102C7.56937 13.9196 7.56937 13.2863 7.95987 12.8964L8.431 12.4251C8.8215 12.0345 9.4539 12.0345 9.8444 12.4251L12.1934 14.7748L18.5407 8.42577C18.9312 8.03516 19.5643 8.03516 19.9541 8.42577L20.4253 8.89702C20.8158 9.28763 20.8158 9.92086 20.4253 10.3108L12.6645 18.0742Z" fill="#00C01F"></path> </svg>Сейчас
                                                сидит в тихом кабинете, в то время как в коридоре сотрудники «гудят». </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="case__col">
                    <div class="container">
                        <div class="h3 mb-25"><b>Андрей Платонов. Владелец компании “Мылофф”, г. Москва, Россия</b></div>
                        <div class="row jc-center">
                            <div class="col-md-4 col-sm-6 col-8"><img class="w-100 lazy" data-src="images/cases/4.webp" alt="Андрей Платонов. Владелец компании “Мылофф”, г. Москва, Россия"></div>
                            <div class="col-md-8">
                                <div class="h-100 d-flex jc-between flex-column case__content">
                                    <div class="col-item">
                                        <div class="h4"><b>Состояние до программы</b></div>
                                        <ul class="case__list list-null">
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewbox="0 0 29 25" fill="none"> <path d="M3.21128 4.56632C3.4326 2.53706 5.14642 1 7.1877 1H22.8104C25.1912 1 27.045 3.06691 26.7868 5.43368L25.1741 20.2209C24.9528 22.2502 23.239 23.7872 21.1977 23.7872H5.57497C3.19416 23.7872 1.34042 21.7203 1.59854 19.3536L3.21128 4.56632Z" stroke="#E92020" stroke-width="2"></path> <rect x="10.623" y="5.74023" width="14.8334" height="2.83164" rx="0.75" transform="rotate(50.9761 10.623 5.74023)" fill="#E92020"></rect> <rect width="14.8334" height="2.83164" rx="0.75" transform="matrix(-0.707107 0.707107 0.707107 0.707107 18.4365 6.14844)" fill="#E92020"></rect> </svg>Проходил
                                                разные курсы и читал книги по найму, но эффективность найма была очень низкая. </li>
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewbox="0 0 29 25" fill="none"> <path d="M3.21128 4.56632C3.4326 2.53706 5.14642 1 7.1877 1H22.8104C25.1912 1 27.045 3.06691 26.7868 5.43368L25.1741 20.2209C24.9528 22.2502 23.239 23.7872 21.1977 23.7872H5.57497C3.19416 23.7872 1.34042 21.7203 1.59854 19.3536L3.21128 4.56632Z" stroke="#E92020" stroke-width="2"></path> <rect x="10.623" y="5.74023" width="14.8334" height="2.83164" rx="0.75" transform="rotate(50.9761 10.623 5.74023)" fill="#E92020"></rect> <rect width="14.8334" height="2.83164" rx="0.75" transform="matrix(-0.707107 0.707107 0.707107 0.707107 18.4365 6.14844)" fill="#E92020"></rect> </svg>Сотрудники
                                                не выходили на работу, и процесс найма был длительным. </li>
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewbox="0 0 29 25" fill="none"> <path d="M3.21128 4.56632C3.4326 2.53706 5.14642 1 7.1877 1H22.8104C25.1912 1 27.045 3.06691 26.7868 5.43368L25.1741 20.2209C24.9528 22.2502 23.239 23.7872 21.1977 23.7872H5.57497C3.19416 23.7872 1.34042 21.7203 1.59854 19.3536L3.21128 4.56632Z" stroke="#E92020" stroke-width="2"></path> <rect x="10.623" y="5.74023" width="14.8334" height="2.83164" rx="0.75" transform="rotate(50.9761 10.623 5.74023)" fill="#E92020"></rect> <rect width="14.8334" height="2.83164" rx="0.75" transform="matrix(-0.707107 0.707107 0.707107 0.707107 18.4365 6.14844)" fill="#E92020"></rect> </svg>Не
                                                знал, откуда брать руководителей, текущие сотрудники, казалось, не смогут выполнять роль руководителя. </li>
                                        </ul>
                                    </div>
                                    <div class="mt-3">
                                        <div class="h4"><b>Результаты после прохождения программы</b></div>
                                        <ul class="case__list case__list--check list-null">
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewbox="0 0 29 26" fill="none"> <path d="M3.21128 5.37687C3.4326 3.34761 5.14642 1.81055 7.1877 1.81055H22.8104C25.1912 1.81055 27.045 3.87745 26.7868 6.24423L25.1741 21.0315C24.9528 23.0607 23.239 24.5978 21.1977 24.5978H5.57497C3.19416 24.5978 1.34042 22.5309 1.59854 20.1641L3.21128 5.37687Z" stroke="#00C01F" stroke-width="2"></path> <path d="M12.6645 18.0742C12.5399 18.1995 12.37 18.2695 12.1934 18.2695C12.0168 18.2695 11.8469 18.1995 11.7223 18.0742L7.95987 14.3102C7.56937 13.9196 7.56937 13.2863 7.95987 12.8964L8.431 12.4251C8.8215 12.0345 9.4539 12.0345 9.8444 12.4251L12.1934 14.7748L18.5407 8.42577C18.9312 8.03516 19.5643 8.03516 19.9541 8.42577L20.4253 8.89702C20.8158 9.28763 20.8158 9.92086 20.4253 10.3108L12.6645 18.0742Z" fill="#00C01F"></path> </svg>Начал
                                                выводить кандидатов на тестовую неделю вместо долгих собеседований. </li>
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewbox="0 0 29 26" fill="none"> <path d="M3.21128 5.37687C3.4326 3.34761 5.14642 1.81055 7.1877 1.81055H22.8104C25.1912 1.81055 27.045 3.87745 26.7868 6.24423L25.1741 21.0315C24.9528 23.0607 23.239 24.5978 21.1977 24.5978H5.57497C3.19416 24.5978 1.34042 22.5309 1.59854 20.1641L3.21128 5.37687Z" stroke="#00C01F" stroke-width="2"></path> <path d="M12.6645 18.0742C12.5399 18.1995 12.37 18.2695 12.1934 18.2695C12.0168 18.2695 11.8469 18.1995 11.7223 18.0742L7.95987 14.3102C7.56937 13.9196 7.56937 13.2863 7.95987 12.8964L8.431 12.4251C8.8215 12.0345 9.4539 12.0345 9.8444 12.4251L12.1934 14.7748L18.5407 8.42577C18.9312 8.03516 19.5643 8.03516 19.9541 8.42577L20.4253 8.89702C20.8158 9.28763 20.8158 9.92086 20.4253 10.3108L12.6645 18.0742Z" fill="#00C01F"></path> </svg>Решил
                                                проблему постановки руководителей. </li>
                                            <li> <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewbox="0 0 29 26" fill="none"> <path d="M3.21128 5.37687C3.4326 3.34761 5.14642 1.81055 7.1877 1.81055H22.8104C25.1912 1.81055 27.045 3.87745 26.7868 6.24423L25.1741 21.0315C24.9528 23.0607 23.239 24.5978 21.1977 24.5978H5.57497C3.19416 24.5978 1.34042 22.5309 1.59854 20.1641L3.21128 5.37687Z" stroke="#00C01F" stroke-width="2"></path> <path d="M12.6645 18.0742C12.5399 18.1995 12.37 18.2695 12.1934 18.2695C12.0168 18.2695 11.8469 18.1995 11.7223 18.0742L7.95987 14.3102C7.56937 13.9196 7.56937 13.2863 7.95987 12.8964L8.431 12.4251C8.8215 12.0345 9.4539 12.0345 9.8444 12.4251L12.1934 14.7748L18.5407 8.42577C18.9312 8.03516 19.5643 8.03516 19.9541 8.42577L20.4253 8.89702C20.8158 9.28763 20.8158 9.92086 20.4253 10.3108L12.6645 18.0742Z" fill="#00C01F"></path> </svg>Понял,
                                                что нужно заниматься развитием текущей команды, тогда она сможет без проблем управлять бизнесом. </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section--theme-yellow">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 p-relative">
                        <div class="prices__sale lazy" data-bg="images/prices/sale.svg"><span class="d-block h2"><b>-54%</b></span> <date class="dd">до 14</date> <date class="mm">ноября</date></div>
                        <h2 class="h1"><b>Стоимость тренинга</b></h2>
                        <div class="prices-list h5">
                            <div class="prices-list__item"><img class="lazy" data-src="images/prices/1.webp" alt="Первый платеж через 30 дней">
                                <div class="prices-list__text">Первый платеж<b> через 30 дней</b></div>
                            </div>
                            <div class="prices-list__item ai-start"><img class="lazy" data-src="images/prices/2.webp" alt="Рассрочка без скидки 5200 руб./мес.">
                                <div class="prices-list__text d-flex pt-1 flex-wrap"><b>2715 руб./мес.</b>
                                    <div class="prices-list__disabled">Рассрочка без скидки 5200 руб./мес.</div>
                                </div>
                            </div>
                            <div class="prices-list__item ai-start"><img class="lazy" data-src="images/prices/3.webp" alt="6 дней по 2 часа интенсивной прокачки">
                                <div class="prices-list__text"><b>6 дней</b> по 2 часа интенсивной прокачки</div>
                            </div>
                            <div class="prices-list__item ai-start"><img class="lazy" data-src="images/prices/4.webp" alt="Разбор консультанта с полным сопровождением до результата">
                                <div class="prices-list__text">
                                	<b>Разборы практических</b><span class="d-block">заданий с обратной связью консультанта</span>
                                </div>
                            </div>
                            <div class="prices-list__item ai-start"><img class="lazy" data-src="images/prices/5.webp" alt="31 готовый документ (регламенты, политики и должностные инструкции)">
                                <div class="prices-list__text">31 готовый документ<b> (регламенты, политики и должностные инструкции)</b></div>
                            </div>
                        </div><a class="btn prices__button btn--arrow btn--hover-black" href="#feedback" rel="modal:open">Записаться</a> </div>
                    <div class="col-md-6">
                        <div class="prices__right"><img class="w-100 lazy" data-src="images/prices/persone-3.webp" alt="Евгений Ермаков">
                            <div class="prices__cv">
                                <div class="mb-2">
                                    <div class="h5 mb-1"><b>Евгений Ермаков</b></div>
                                    <div class="prices__cv-sub">Клиент Visotsky Consulting</div>
                                </div>
                                <p class="m-0">Владелец ГК “Покрофф” — производство кровельных материалов, оборот 2.5 млрд рублей,<b> рекомендует Visotsky Consulting</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" id="reviews">
            <div class="container text-center">
                <h2 class="h1 mb-35"><b>Отзывы</b></h2>
                <div class="device-slider">
                    <div class="device-slider__arrows">
                        <div class="device-slider__arrow js-device-slider__prev"><img class="lazy" data-src="images/icons/arrow-left.svg" alt="Листать"></div>
                        <div class="device-slider__arrow js-device-slider__next"><img class="lazy" data-src="images/icons/arrow-right.svg" alt="Листать"></div>
                    </div>
                    <div class="device-slider__circles device-slider__circles--theme-dark"></div>
                    <div class="device-slider__container">
                        <div class="js-device-slider device-slider__items slick-preloader">
                            <div class="item"><img width="340" height="730" data-lazy="images/reviews/bottom/1.webp" alt="Отзыв 1"></div>
                            <div class="item"><img data-lazy="images/reviews/bottom/2.webp" alt="Отзыв 2"></div>
                            <div class="item"><img data-lazy="images/reviews/bottom/3.webp" alt="Отзыв 3"></div>
                            <div class="item"><img data-lazy="images/reviews/bottom/4.webp" alt="Отзыв 4"></div>
                            <div class="item"><img data-lazy="images/reviews/bottom/5.webp" alt="Отзыв 5"></div>
                            <div class="item"><img data-lazy="images/reviews/bottom/6.webp" alt="Отзыв 6"></div>
                            <div class="item"><img data-lazy="images/reviews/bottom/7.webp" alt="Отзыв 7"></div>
                            <div class="item"><img data-lazy="images/reviews/bottom/8.webp" alt="Отзыв 8"></div>
                            <div class="item"><img data-lazy="images/reviews/bottom/9.webp" alt="Отзыв 9"></div>
                        </div>
                        <div class="device-slider__phone"><img src="images/device-slider/iphone.webp" alt="Телефон"></div>
                    </div>
                </div>
            </div>
            <section class="section text-center" id="company">
                <div class="container">
                    <div class="mb-35">
                        <h2 class="h1"><b>О компании</b></h2>
                    </div>
                    <div class="row gy-2">
                        <div class="col-lg-8"><img class="w-100 lazy" data-src="images/company/bg.webp" alt="О компании"></div>
                        <div class="col-lg-4">
                            <div class="row h-100 jc-between row-cols-lg-1 row-cols-md-3 row-cols-1 gy-2">
                                <div class="col"><img class="mb-3 lazy" data-src="images/company/1.svg" alt="О компании"><small class="d-block">сотрудников в США, России, Украине, Казахстане и на Тайване</small></div>
                                <div class="col"><img class="mb-3 lazy" data-src="images/company/2.svg" alt="О компании"><small class="d-block">национальных наград с 2014 года в качестве лучшей консалтинговой компании для малого и среднего бизнеса в СНГ</small></div>
                                <div
                                    class="col"><img class="mb-3 lazy" data-src="images/company/3.svg" alt="О компании"><small class="d-block">профессиональных консультантов, прошедшие 2-х годичную подготовку и аттестацию в Visotsky Consulting</small></div>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <div class="row row-cols-md-3 row-cols-1 gy-2">
                        <div class="col"><img class="mb-3 lazy" data-src="images/company/4.svg" alt="О компании"><small class="d-block">бизнес туров и конференций организовано в Нью-Йорке, США, Турции, Сочи и на Бали для владельцев бизнеса с 2013 года</small></div>
                        <div
                            class="col"><img class="mb-3 lazy" data-src="images/company/4.svg" alt="О компании"><small class="d-block">компании проходят 12-месячную консалтинговую программу по систематизации прямо сейчас</small></div>
                    <div class="col"><img class="mb-3 lazy" data-src="images/company/4.svg" alt="О компании"><small class="d-block">ниш и индустрий с 2009 года, в которые мы внедрили инструменты управления</small></div>
                </div>
    </div>
    </div>
    </section>
    <section class="section act lazy" data-bg="images/act/bg.webp">
        <div class="container">
            <h2 class="h1 mb-35">Почему нужно<span class="d-block"><b>действовать сейчас?</b></span></h2>
            <div class="row jc-between gy-md-3 gy-2">
                <div class="col-lg-5 col-sm-6"><img class="act__icon lazy" data-src="images/act/icons/1.svg" alt="Дальше будет сложнее">
                    <div class="h4 act__title"><b>Дальше будет сложнее</b></div>
                    <p>Кризис показал кто есть кто и обнажил слабые стороны бизнеса. С каждым годом любая неэффективность обходится дороже и может обанкротить бизнес.</p>
                </div>
                <div class="col-lg-5 col-sm-6"><img class="act__icon lazy" data-src="images/act/icons/1.svg" alt="Все равно придется внедрять">
                    <div class="h4 act__title"><b>Все равно придется внедрять</b></div>
                    <p>Рано или поздно для любого бизнеса отсутствие системы в управлении становится тормозом. Чем раньше она у вас появится тем быстрее вы будете расти.</p>
                </div>
                <div class="col-lg-5 col-sm-6"><img class="act__icon lazy" data-src="images/act/icons/1.svg" alt="Работая 24/7 и тащя все на себе, вы эмоционально выгорите">
                    <div class="h4 act__title"><b>Работая 24/7 и тащя все на себе, вы эмоционально выгорите</b></div>
                    <p>Неорганизованный бизнес как недостроенный дом, в котором живут люди. Во-первых, это некомфортно, вы закрываете неэффективность собой. Во-вторых, это небезопасно. Все может полететь к чертям в любой момент.</p>
                </div>
                <div class="col-lg-5 col-sm-6"><img class="act__icon lazy" data-src="images/act/icons/1.svg" alt="Бизнес не может развиваться быстрее компетенции владельца">
                    <div class="h4 act__title"><b>Бизнес не может развиваться быстрее компетенции владельца</b></div>
                    <p>Чтобы бизнес мог вырасти качественно владельцу необходимо повышать свою компетентность в управлении. Иначе, владелец сам становится узким местом.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section section--theme-yellow">
        <div class="container">
            <div class="row">
                <div class="col-md-6 p-relative">
                    <div class="prices__sale lazy" data-bg="images/prices/sale.svg"><span class="d-block h2"><b>-54%</b></span> <date class="dd">до 14</date> <date class="mm">ноября</date></div>
                    <h2 class="h1"><b>Стоимость тренинга</b></h2>
                    <div class="prices-list h5">
                        <div class="prices-list__item"><img class="lazy" data-src="images/prices/1.webp" alt="Первый платеж через 30 дней">
                            <div class="prices-list__text">Первый платеж<b> через 30 дней</b></div>
                        </div>
                        <div class="prices-list__item ai-start"><img class="lazy" data-src="images/prices/2.webp" alt="Рассрочка без скидки 5200 руб./мес.">
                            <div class="prices-list__text d-flex pt-1 flex-wrap"><b>2715 руб./мес.</b>
                                <div class="prices-list__disabled">Рассрочка без скидки 5200 руб./мес.</div>
                            </div>
                        </div>
                        <div class="prices-list__item ai-start"><img class="lazy" data-src="images/prices/3.webp" alt="6 дней по 2 часа интенсивной прокачки">
                            <div class="prices-list__text"><b>6 дней</b> по 2 часа интенсивной прокачки</div>
                        </div>
                        <div class="prices-list__item ai-start"><img class="lazy" data-src="images/prices/4.webp" alt="Разбор консультанта с полным сопровождением до результата">
                            <div class="prices-list__text">
                            	<b>Разборы практических</b><span class="d-block">заданий с обратной связью консультанта</span>
                            </div>
                        </div>
                        <div class="prices-list__item ai-start"><img class="lazy" data-src="images/prices/5.webp" alt="31 готовый документ (регламенты, политики и должностные инструкции)">
                            <div class="prices-list__text">31 готовый документ<b> (регламенты, политики и должностные инструкции)</b></div>
                        </div>
                    </div><a class="btn prices__button btn--arrow btn--hover-black" href="#feedback" rel="modal:open">Записаться</a> </div>
                <div class="col-md-6">
                    <div class="prices__right"><img class="w-100 lazy" data-src="images/prices/persone-4.webp" alt="Мария Петченко">
                        <div class="prices__cv">
                            <div class="mb-2">
                                <div class="h5 mb-1"><b>Мария Петченко</b></div>
                                <div class="prices__cv-sub">Клиент Visotsky Consulting</div>
                            </div>
                            <p class="m-0">Основатель Peroni Honey - производство меда-суфле, оборот 120 млн рублей в год,<b> рекомендует Visotsky Consulting</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </section>
        <section class="section">
            <div class="container">
                <div class="row ai-center jc-center gy-2">
                    <div class="col-md-7 col-10"><img class="w-100 lazy" data-src="images/programm/1.webp" alt="О программе"></div>
                    <div class="col-lg-5">
                        <h2 class="h1 mb-4"><b>О программе</b></h2>
                        <div class="mb-35">
                            <p>Тренинг включает в себя<b> 6 дней интенсивной прокачки,</b><span class="d-block"> 6 сессий с Александром Высоцким и 30-60 минут разбор практических заданий профессиональным консультантом каждый день при оформлении заявки сегодня.</span></p>
                            <p>
                                А также комплект из<span class="smb-yellow-text mx-2">
                                <b>31 документа</b>
                                </span>
                                стоимостью <span class="d-md-block">15 000 рублей в подарок, 3 бонусных урока от топовых спикеров и 7 примеров организующих схем разных видов бизнеса.</span>
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-lg-9"><a class="btn w-100 p-0" href="#programm"> Смотреть программу тренинга</a></div>
                        </div>
                        <!--<p class="m-0 mt-3"><b>Действует 100% гарантия возврата средств в течение первых 3 занятий по любой причине</b></p>-->
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>

<script>
    var dd1 = document.getElementsByClassName('dd');
    //dd1.forEach(el => {el.innerHTML = day;});
    for (var i = 0; i < dd1.length; i++) {
        dd1[i].innerHTML = day;
    }

    var mm1 = document.getElementsByClassName('mm');
    for (var i = 0; i < mm1.length; i++) {
       mm1[i].innerHTML = month;
    }
</script>

<?php include('blocks/footer.php'); ?>

