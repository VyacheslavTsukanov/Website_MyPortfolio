
    function change1(){

        menuEn();
        HtmlCssEn();
        jsEn();
        sharpEn();
        latestProjectEn();
        footerEn();


        document.getElementById("TechnologiesUsedHTML").innerHTML="Technologies used and professional skills:";
        document.getElementById("TechnologiesUsedJS").innerHTML="Technologies used and professional skills:";
        document.getElementById("TechnologiesUsedSharp").innerHTML="Technologies used and professional skills:";

        // Latest project / Последние проекты
        document.getElementById("latestProject").innerHTML="Latest project";
    }

    function change2(){

        menuRu();
        HtmlCssRu();
        jsRu();
        sharpRu();
        latestProjectRu();
        footerRu()

        document.getElementById("TechnologiesUsedHTML").innerHTML="Профессиональные навыки: ";
        document.getElementById("TechnologiesUsedJS").innerHTML="Профессиональные навыки: ";
        document.getElementById("TechnologiesUsedSharp").innerHTML="Профессиональные навыки: ";

        
        // Latest project / Последние проекты
        document.getElementById("latestProject").innerHTML="Последние проекты";

        //document.getElementById("").innerHTML="";
    }


    // Latest project
    // ---------------------------English-------------------------------------------------------

    function menuEn() {
        document.getElementById("projects").innerHTML="Projects";
        document.getElementById("about").innerHTML="About Us";
        document.getElementById("specialty").innerHTML="Programmer";
        document.getElementById("firstName").innerHTML="Vyacheslav Tsukanov";
        document.getElementById("description").innerHTML="I love creating projects that have a positive impact";
        document.getElementById("useTechnology").innerHTML="Use technology";
    }

    function HtmlCssEn() {
        // HTML CSS
        document.getElementById("htmlExperience").innerHTML="experience with HTML5, CSS3;";
        document.getElementById("htmlExperienceAdaptive").innerHTML="experience in adaptive layout;";
        document.getElementById("htmlExperienceCreating").innerHTML="experience in creating an HTML site page based on design layouts;";
        document.getElementById("htmlKnowledgeCSSFrameworks").innerHTML="creation of CSS frameworks;";
        document.getElementById("htmlKnowledgeCrossBrowser").innerHTML="creation of cross-browser layout;";
    }

    function jsEn() {
        // JS
        document.getElementById("DataTypes").innerHTML="Data types, operators, methods, and properties;";
        document.getElementById("DynamicData").innerHTML="Dynamic data typing in Javascript. The conditions of branching;";
        document.getElementById("VariablesConditions").innerHTML="Variables, conditions, loops, arrays, functions, DOM model, event handling. cycles. recursion;";
        document.getElementById("SkillsForLinking").innerHTML="Skills for linking scripts to the user interface that provide visualization and animation of site pages;";
        document.getElementById("Functions").innerHTML="Functions. Scope and closure;";
        document.getElementById("WorkingWithDOM").innerHTML="Working with DOM, working with DOM elements;";
        document.getElementById("EventsInJS").innerHTML="Events in JS, event handlers and how they work, mouse and keyboard events;";
        document.getElementById("contextOfTheCall").innerHTML="The context of the call - this;";
        document.getElementById("ScriptsAndRuntime").innerHTML="Scripts and runtime. setTimeout, setInterval, and requestAnimationFrame. date object;";
        document.getElementById("DocumentParameters").innerHTML="Document parameters, Windows, and working with them;";
        document.getElementById("OOP-Inheritance").innerHTML="OOP-Inheritance, prototypes, constructors, and classes;";
        document.getElementById("tryCatch").innerHTML="try..catch-catching errors; SimpleHttpServer and import / export;";
        document.getElementById("collections").innerHTML="collections: Map / Set; assign; isEqual; localStorage; async / await;";
        document.getElementById("textWebsiteJS").innerHTML="I have mastered the OOP, Written and completely ready timer for the site in JS. I can manipulate the contents of a browser page, write animations, and understand what 'this'; I like to solve complex problems!";
    }

    function sharpEn() {
        // Sharp
        document.getElementById("creatingWeb").innerHTML="creating web applications and web services;";
        document.getElementById("creatingDesktop").innerHTML="creating desktop applications;";
        document.getElementById("creatingServices").innerHTML="creating cloud services;";
        document.getElementById("gameDevelopment").innerHTML="game development;";
        document.getElementById("creationOfMobileApplications").innerHTML="the creation of mobile applications;";

        document.getElementById("Algorithms").innerHTML="Algorithms and data structures;";
        document.getElementById("Design").innerHTML="Design patterns (Templates);";
        document.getElementById("Delegates&Events").innerHTML="Delegates and events;";
        document.getElementById("Pointers").innerHTML="Pointers;";
        document.getElementById("ExceptionHandling").innerHTML="Exception handling (try-catch and finally block);";
        document.getElementById("Asynchrony").innerHTML="Asynchrony (async, await);";
        document.getElementById("MultithreadedProgramming").innerHTML="Multithreaded programming (thread);";
        document.getElementById("SQLLanguage").innerHTML="SQL is a declarative structured query language;";

        document.getElementById("SharpLINQ").innerHTML="LINQ - Language Integrated Query (language integrated query);";
    }


    function latestProjectEn() {
        document.getElementById("more1").innerHTML="More";
        document.getElementById("more2").innerHTML="More";
        document.getElementById("more3").innerHTML="More";
        document.getElementById("more4").innerHTML="More";
        document.getElementById("more5").innerHTML="More";
        document.getElementById("more6").innerHTML="More";
        document.getElementById("more7").innerHTML="More";

        document.getElementById("websiteWithATemplate1").innerHTML="Website with a template";
        document.getElementById("websiteWithATemplate2").innerHTML="Website with a template";
        document.getElementById("websiteWithATemplate4").innerHTML="Website with a template";
        document.getElementById("websiteWithATemplate5").innerHTML="Website with a template";
        document.getElementById("websiteWithATemplate7").innerHTML="Website with a template";

        document.getElementById("game3").innerHTML="Game";
        document.getElementById("game6").innerHTML="Game";

        document.getElementById("theMethodsUsed3").innerHTML="The methods used:";
        document.getElementById("theMethodsUsed6").innerHTML="The methods used:";

        document.getElementById("deadlines1").innerHTML="deadlines";
        document.getElementById("deadlines2").innerHTML="deadlines";
        document.getElementById("deadlines3").innerHTML="deadlines";
        document.getElementById("deadlines4").innerHTML="deadlines";
        document.getElementById("deadlines5").innerHTML="deadlines";
        document.getElementById("deadlines6").innerHTML="deadlines";
        document.getElementById("deadlines7").innerHTML="deadlines";

        document.getElementById("complexity1").innerHTML="complexity";
        document.getElementById("complexity2").innerHTML="complexity";
        document.getElementById("complexity3").innerHTML="complexity";
        document.getElementById("complexity4").innerHTML="complexity";
        document.getElementById("complexity5").innerHTML="complexity";
        document.getElementById("complexity6").innerHTML="complexity";
        document.getElementById("complexity7").innerHTML="complexity";

        document.getElementById("description1").innerHTML="description";
        document.getElementById("description2").innerHTML="description";
        document.getElementById("description3").innerHTML="description";
        document.getElementById("description4").innerHTML="description";
        document.getElementById("description5").innerHTML="description";
        document.getElementById("description6").innerHTML="description";
        document.getElementById("description7").innerHTML="description";

        document.getElementById("descriptionName1").innerHTML="Website - Organization of conferences";
        document.getElementById("descriptionName2").innerHTML="Website - Couch Shop";
        document.getElementById("descriptionName3").innerHTML="Game - 1001 Questions Game";
        document.getElementById("descriptionName4").innerHTML="Website - Epa green";
        document.getElementById("descriptionName5").innerHTML="Website - 'Space-X'";
        document.getElementById("descriptionName6").innerHTML="Game - Cards Three in one";
        document.getElementById("descriptionName7").innerHTML="Website - Always a delicious and varied menu for every taste and prosperity";

        document.getElementById("workingDays1").innerHTML="5 working days";
        document.getElementById("workingDays2").innerHTML="3 working days";
        document.getElementById("workingDays3").innerHTML="15 working days";
        document.getElementById("workingDays4").innerHTML="3 working days";
        document.getElementById("workingDays5").innerHTML="4 working days";
        document.getElementById("workingDays6").innerHTML="9 working days";
        document.getElementById("workingDays7").innerHTML="5 working days";


        document.getElementById("description1Proj1").innerHTML="Organization of conferences";
        document.getElementById("description1Proj2").innerHTML="Large selection of couches";
        document.getElementById("description1Proj3").innerHTML="The '1001 Questions Game' is a quiz contest in which participants must correctly answer a series of multiple-choice questions, to go to the next level.";
        document.getElementById("description1Proj4").innerHTML="Landing Page templates";
        document.getElementById("description1Proj5").innerHTML="Landing Page templates";
        document.getElementById("description1Proj6").innerHTML="A puzzle is not an easy task to solve, which usually requires ingenuity, rather than high-level special knowledge. However some puzzles are stimulating theoretical and practical developments of scientists.";
        document.getElementById("description1Proj7").innerHTML="While I wanted to redesign this app for my own personal use, there are other types of users that I should have been aware of when creating a universal design. Through the interview, I realized what pain points people who usually use an online service face, and solved these problems in my design.";
    
    }


    function footerEn() {
        // footer
        document.getElementById("Communication").innerHTML="Communication";
        document.getElementById("SocialNetwork").innerHTML="Social Network";
    }


    // -----------------------Russian------------------------------------------------------------

    function menuRu() {
        document.getElementById("projects").innerHTML="Проекты";
        document.getElementById("about").innerHTML="О нас";
        document.getElementById("specialty").innerHTML="Программист";
        document.getElementById("firstName").innerHTML="Цуканов Вячеслав";
        document.getElementById("description").innerHTML="Я люблю создавать проекты, которые оказывают положительное влияние";
        document.getElementById("useTechnology").innerHTML="Используемые технологии";
    }
    
    function HtmlCssRu() {
        // HTML CSS
        document.getElementById("htmlExperience").innerHTML="опыт работы с HTML5, CSS3;";
        document.getElementById("htmlExperienceAdaptive").innerHTML="опыт адаптивной верстки;";
        document.getElementById("htmlExperienceCreating").innerHTML="опыт создания HTML-страницы сайта на основе дизайн-макетов;";
        document.getElementById("htmlKnowledgeCSSFrameworks").innerHTML="знание CSS-фреймворков;";
        document.getElementById("htmlKnowledgeCrossBrowser").innerHTML="знание кросс-браузерной верстки;";
    }

    function jsRu() {
        // JS
        document.getElementById("DataTypes").innerHTML="Типы данных, операторы, методы и свойства;";
        document.getElementById("DynamicData").innerHTML="Динамическая типизация данных в Javascript. Условия, ветвления;";
        document.getElementById("VariablesConditions").innerHTML="Переменные, условия, циклы, массивы, функции, модель DOM, обработка событий. циклы. рекурсия;";
        document.getElementById("SkillsForLinking").innerHTML="Навыки привязки к пользовательскому интерфейсу скриптов, которые обеспечивают визуализацию и анимацию страниц сайта;";
        document.getElementById("Functions").innerHTML="Функции. Область видимости и замыкание;";
        document.getElementById("WorkingWithDOM").innerHTML="Работа с DOM, работа с элементами DOM;";
        document.getElementById("EventsInJS").innerHTML="События в JS, обработчики событий и особенности их работы, события мыши и клавиатуры;";
        document.getElementById("contextOfTheCall").innerHTML="Контекст вызова - this;";
        document.getElementById("ScriptsAndRuntime").innerHTML="Скрипты и время выполнения. setTimeout, setInterval и requestAnimationFrame. Объект Date;";
        document.getElementById("DocumentParameters").innerHTML="Параметры документа, окна и работа с ними;";
        document.getElementById("OOP-Inheritance").innerHTML="ООП - Наследование, прототипы, конструкторы и классы;";
        document.getElementById("tryCatch").innerHTML="try..catch - перехват ошибок; SimpleHttpServer и import / export;";
        document.getElementById("collections").innerHTML="коллекции: Map / Set; assign; isEqual; localStorage; async / await;";
        document.getElementById("textWebsiteJS").innerHTML="Освоил ООП, Написанный и полностью готовый таймер для сайта на JS. Могу манипулировать содержимым страницы браузера, писать анимации, понимаю что такое 'this'; Люблю решать сложные задачи!";      
    }

    function sharpRu() {
        // Sharp
        document.getElementById("creatingWeb").innerHTML="создание веб-приложений и веб-сервисов;";
        document.getElementById("creatingDesktop").innerHTML="создание настольных приложений;";
        document.getElementById("creatingServices").innerHTML="создание облачных сервисов;";
        document.getElementById("gameDevelopment").innerHTML="создание игр;";
        document.getElementById("creationOfMobileApplications").innerHTML="создание мобильных приложений;";

        document.getElementById("Algorithms").innerHTML="Алгоритмы и структуры данных;";
        document.getElementById("Design").innerHTML="Паттерны проектирования (Шаблоны);";
        document.getElementById("Delegates&Events").innerHTML="Делегаты и события;";
        document.getElementById("Pointers").innerHTML="Указатели;";
        document.getElementById("ExceptionHandling").innerHTML="Обработка исключений (try-catch и блок finally);";
        document.getElementById("Asynchrony").innerHTML="Асинхронность (async, await);";
        document.getElementById("MultithreadedProgramming").innerHTML="Многопоточное программирование (thread);";
        document.getElementById("SQLLanguage").innerHTML="SQL - декларативный язык структурированных запросов;";

        document.getElementById("SharpLINQ").innerHTML="LINQ - Language Integrated Query (язык интегрированных запросов);";
        
    }

    function latestProjectRu() {
        document.getElementById("more1").innerHTML="Подробнее";
        document.getElementById("more2").innerHTML="Подробнее";
        document.getElementById("more3").innerHTML="Подробнее";
        document.getElementById("more4").innerHTML="Подробнее";
        document.getElementById("more5").innerHTML="Подробнее";
        document.getElementById("more6").innerHTML="Подробнее";
        document.getElementById("more7").innerHTML="Подробнее";

        document.getElementById("websiteWithATemplate1").innerHTML="Сайт с шаблона";
        document.getElementById("websiteWithATemplate2").innerHTML="Сайт с шаблона";
        document.getElementById("websiteWithATemplate4").innerHTML="Сайт с шаблона";
        document.getElementById("websiteWithATemplate5").innerHTML="Сайт с шаблона";
        document.getElementById("websiteWithATemplate7").innerHTML="Сайт с шаблона";

        document.getElementById("game3").innerHTML="Игра";
        document.getElementById("game6").innerHTML="Игра";
        document.getElementById("theMethodsUsed3").innerHTML="Используемые методы:";
        document.getElementById("theMethodsUsed6").innerHTML="Используемые методы:";

        document.getElementById("deadlines1").innerHTML="Сроки";
        document.getElementById("deadlines2").innerHTML="Сроки";
        document.getElementById("deadlines3").innerHTML="Сроки";
        document.getElementById("deadlines4").innerHTML="Сроки";
        document.getElementById("deadlines5").innerHTML="Сроки";
        document.getElementById("deadlines6").innerHTML="Сроки";
        document.getElementById("deadlines7").innerHTML="Сроки";

        document.getElementById("complexity1").innerHTML="Сложность";
        document.getElementById("complexity2").innerHTML="Сложность";
        document.getElementById("complexity3").innerHTML="Сложность";
        document.getElementById("complexity4").innerHTML="Сложность";
        document.getElementById("complexity5").innerHTML="Сложность";
        document.getElementById("complexity6").innerHTML="Сложность";
        document.getElementById("complexity7").innerHTML="Сложность";

        document.getElementById("description1").innerHTML="Описание";
        document.getElementById("description2").innerHTML="Описание";
        document.getElementById("description3").innerHTML="Описание";
        document.getElementById("description4").innerHTML="Описание";
        document.getElementById("description5").innerHTML="Описание";
        document.getElementById("description6").innerHTML="Описание";
        document.getElementById("description7").innerHTML="Описание";

        document.getElementById("descriptionName1").innerHTML="Сайт - Организация конференций";
        document.getElementById("descriptionName2").innerHTML="Сайт - Магазин кушеток";
        document.getElementById("descriptionName3").innerHTML="Игра - 1001 вопрос";
        document.getElementById("descriptionName4").innerHTML="Сайт - Epa green";
        document.getElementById("descriptionName5").innerHTML="Сайт - 'Space-X'";
        document.getElementById("descriptionName6").innerHTML="Игра - Карты три в одном";
        document.getElementById("descriptionName7").innerHTML="Сайт - Всегда вкусное и разнообразное меню на любой вкус и достаток";

        document.getElementById("workingDays1").innerHTML="5 рабочих дня";
        document.getElementById("workingDays2").innerHTML="3 рабочих дня";
        document.getElementById("workingDays3").innerHTML="15 рабочих дня";
        document.getElementById("workingDays4").innerHTML="3 рабочих дня";
        document.getElementById("workingDays5").innerHTML="4 рабочих дня";
        document.getElementById("workingDays6").innerHTML="9 рабочих дня";
        document.getElementById("workingDays7").innerHTML="5 рабочих дня";

        document.getElementById("description1Proj1").innerHTML="Организация конференций";
        document.getElementById("description1Proj2").innerHTML="Большой выбор кушеток";
        document.getElementById("description1Proj3").innerHTML="Игра '1001 Questions Game' - это конкурс викторина, в котором участники должны правильно ответить на ряд вопросов с несколькими вариантами ответов, чтобы перейти на следующий уровень.";
        document.getElementById("description1Proj4").innerHTML="Сайт с шаблона";
        document.getElementById("description1Proj5").innerHTML="Сайт с шаблона";
        document.getElementById("description1Proj6").innerHTML="Головоломка — непростая задача, для решения которой, как правило, требуется сообразительность, а не специальные знания высокого уровня. Тем не менее некоторые головоломки стимулируют теоретические и практические разработки учёных.";
        document.getElementById("description1Proj7").innerHTML="Хотя я хотел перепроектировать это приложение для своего личного использования, есть и другие типы пользователей, о которых я должен был знать при создании универсального дизайна. Через интервью я понял, с какими болевыми точками сталкиваются люди, которые обычно пользуются онлайн сервисом, и решил эти проблемы в своем дизайне.";
    }

    function footerRu() {
        // footer
        document.getElementById("Communication").innerHTML="Cвязь";
        document.getElementById("SocialNetwork").innerHTML="Соцсети";
    }
