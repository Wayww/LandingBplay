# BeynePlay Landing — Codex / Front-end Handoff Specification

Версия: 1.0  
Назначение: production-oriented спецификация для переноса утверждённого визуального направления BeynePlay из дизайн-референсов в адаптивную веб-вёрстку.  
Аудитория сайта: партнёры, студии, правообладатели и инвесторы. Не конечные зрители приложения.  
Основная задача страницы: за 3–5 минут дать ясное понимание, что такое BeynePlay, почему категория интересна, какую возможность видит команда, как устроена система, что получает партнёр, кто команда и как связаться.

---

## 0. Source of truth / приоритет источников

При несовпадении источников применять следующий приоритет:

1. Эта спецификация — поведение, UX, responsive, accessibility и правила реализации.
2. Финальные визуальные экраны в `assets/screens/` — композиция, пропорции, плотность, визуальный характер.
3. `source/BeynePlay_Landing_Content_v4.docx` — финальный текстовый контент.
4. `source/linear-style-reference.md` — базовая дизайн-система и стилистический референс Linear.
5. Нельзя возвращать решения, которые были удалены по итогам правок: глобальный левый section-slider, перегруженные orbital-инфографики, средний pipeline в блоке «Что такое BeynePlay», интерфейсный dashboard/mockup в партнёрском блоке.

### Финальные screen references

- `assets/screens/01-hero.png`
- `assets/screens/02-why-now.png`
- `assets/screens/03-opportunity.png`
- `assets/screens/04-what-is-beyneplay.png`
- `assets/screens/05-ecosystem.png`
- `assets/screens/06-partners.png`
- `assets/screens/07-team.png`
- `assets/screens/08-faq.png`
- `assets/screens/09-contact.png`

Эти изображения — reference frames, а не готовые картинки страницы. Не вставлять весь screenshot как `<img>` вместо HTML/CSS. Все заголовки, текст, CTA, FAQ и карточки должны быть нативной HTML-разметкой.

---

# 1. Главные продуктовые и UX-принципы

## 1.1. Это не consumer landing

Сайт не должен выглядеть как лендинг стримингового приложения с фокусом на «смотрите сейчас / скачайте приложение». Это короткий web-pitch для человека, который уже получил ссылку после знакомства, созвона или интро.

Поэтому:

- нет App Store / Google Play;
- нет регистрации;
- нет формы заявки;
- нет pricing;
- нет consumer-feature dump;
- нет большой библиотеки контента;
- нет fake testimonials;
- нет fake traction;
- нет countdown / urgency;
- нет автозапуска видео со звуком.

Главная конверсия: **начать прямой разговор**.

Основные действия:

- `Обсудить партнёрство`
- `Связаться с нами`
- Telegram
- WhatsApp
- Email

## 1.2. Страница должна ощущаться лёгкой

Обязательное правило: один смысловой фокус на viewport/секции.

Не пытаться одновременно показывать:

- длинный текст;
- большую инфографику;
- шесть карточек;
- цифры;
- CTA;
- дополнительный декоративный visual.

Если экран начинает выглядеть как dashboard или pitch-deck slide с 10–15 объектами, это ошибка.

## 1.3. Визуальный характер

Ключевые слова:

- dark precision;
- cinematic, но не «киношный постерный сайт»;
- clean;
- premium;
- technical;
- confident;
- quiet;
- high contrast;
- минимальное количество декоративных цветов;
- product/system credibility вместо «маркетингового шума».

Базовая логика заимствована у Linear: near-black canvas, белая типографика, тонкие границы, один кислотно-лаймовый акцент, маленькие радиусы, минимум теней.

---

# 2. Информационная архитектура страницы

Порядок секций фиксированный:

1. Hero
2. Why now
3. Opportunity
4. What is BeynePlay
5. How the ecosystem works
6. For partners
7. Team
8. FAQ
9. Contact + Footer

### Section IDs

Использовать стабильные якоря:

```txt
#top
#why-now
#opportunity
#about
#ecosystem
#partners
#team
#faq
#contact
```

`scroll-margin-top: 96px` для всех секций, чтобы sticky header не перекрывал заголовок.

---

# 3. Global layout

## 3.1. Canvas

Основной фон:

```css
--color-void: #08090a;
```

Не использовать чистый `#000000` как основной canvas. `#08090a` даёт более дорогую и мягкую глубину.

Допускается очень слабый radial/light wash в крупных секциях:

```css
background:
  radial-gradient(circle at 65% 50%, rgba(228,242,34,.025), transparent 34%),
  #08090a;
```

Не использовать заметные разноцветные gradients.

## 3.2. Containers

```css
--container-wide: 1440px;
--container-content: 1200px;
--page-gutter-desktop: 48px;
--page-gutter-tablet: 32px;
--page-gutter-mobile: 20px;
```

Рекомендация:

```css
.container-wide {
  width: min(calc(100% - 96px), 1440px);
  margin-inline: auto;
}

.container {
  width: min(calc(100% - 96px), 1200px);
  margin-inline: auto;
}
```

На 1024–1279 уменьшить horizontal gutter до 32px. На mobile — 20px.

## 3.3. Вертикальный rhythm

Desktop:

- section top/bottom: 120–160px;
- крупные смысловые блоки внутри секции: 48–64px;
- title → body: 28–32px;
- body → cards: 48–64px.

Tablet:

- section vertical padding: 96–120px.

Mobile:

- section vertical padding: 72–88px.

Нельзя сжимать секции до SaaS-density. Воздух — часть визуальной идентичности.

---

# 4. Design tokens

## 4.1. Colors

Основная палитра из Linear style reference:

```css
:root {
  --color-void: #08090a;
  --color-carbon: #0f1011;
  --color-obsidian: #161718;
  --color-graphite: #23252a;
  --color-smoke: #383b3f;
  --color-ash: #62666d;
  --color-fog: #8a8f98;
  --color-mist: #d0d6e0;
  --color-bone: #e5e5e6;
  --color-paper: #ffffff;
  --color-accent: #e4f222;

  --border-subtle: rgba(255,255,255,.09);
  --border-soft: rgba(255,255,255,.06);
  --surface-soft: rgba(255,255,255,.018);
  --surface-hover: rgba(255,255,255,.026);
  --accent-soft: rgba(228,242,34,.08);
  --accent-border: rgba(228,242,34,.42);
}
```

### Правила цвета

1. `#e4f222` — единственный основной action/accent цвет.
2. Не окрашивать большие абзацы в лайм.
3. Не делать все borders лаймовыми.
4. Accent используется для:
   - primary CTA;
   - section eyebrow/номер;
   - active icon;
   - отдельной цифры;
   - hover/focus состояния;
   - очень тонкого glow.
5. Серые тексты не должны уходить в синеву или warm gray.
6. Любые цвета внутри кадров/постеров контента допустимы как часть изображения, но не как UI palette.

## 4.2. Typography

Основной шрифт: **Inter Variable**.

Предпочтительно:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
font-feature-settings: "cv01" 1, "ss03" 1, "zero" 1;
```

Не использовать 700–900 для маркетинговых заголовков.

### Scale

```css
--text-display: clamp(52px, 5.2vw, 76px);
--text-h1: clamp(46px, 4.4vw, 68px);
--text-h2: clamp(38px, 3.5vw, 56px);
--text-h3: clamp(26px, 2.2vw, 34px);
--text-card-title: 22px;
--text-body-lg: 18px;
--text-body: 16px;
--text-body-sm: 14px;
--text-label: 12px;
```

Desktop display:

```css
font-weight: 510;
line-height: .98;
letter-spacing: -.022em;
```

H2:

```css
font-weight: 510;
line-height: 1.02;
letter-spacing: -.02em;
```

Body:

```css
font-weight: 400;
line-height: 1.55;
letter-spacing: -.01em;
color: var(--color-fog);
```

### Gradient/faded headings

В финальных макетах часть второй/третьей строки заголовка может быть серее. Реализовывать не текстовым gradient, а разными `<span>`:

```html
<h2>
  BeynePlay —<br>
  <span class="text-muted-heading">не просто ещё один<br>онлайн-кинотеатр</span>
</h2>
```

```css
.text-muted-heading { color: #9b9da1; }
```

Не использовать `background-clip:text` для основных заголовков.

---

# 5. Borders, radii, elevation

## 5.1. Радиусы

```css
--radius-xs: 4px;
--radius-button: 6px;
--radius-card: 12px;
--radius-pill: 9999px;
```

Не делать карточки 20–32px radius.

## 5.2. Карточки

Базовая:

```css
.card {
  background: rgba(255,255,255,.018);
  border: 1px solid rgba(255,255,255,.09);
  border-radius: 12px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.02);
}
```

Hover:

```css
.card--interactive:hover,
.card--interactive:focus-within {
  background: rgba(255,255,255,.026);
  border-color: rgba(228,242,34,.36);
  transform: translateY(-2px);
}
```

Не добавлять большой drop shadow. Elevation строится на border/surface.

## 5.3. Accent glow

Допустим только как маленькая подсветка:

```css
box-shadow: 0 0 28px rgba(228,242,34,.08);
```

Не использовать neon bloom вокруг каждого элемента.

---

# 6. Buttons and links

## 6.1. Primary CTA

Filled lime.

```css
.btn-primary {
  min-height: 48px;
  padding: 0 20px;
  border-radius: 6px;
  border: 1px solid #e4f222;
  background: #e4f222;
  color: #08090a;
  font-size: 14px;
  font-weight: 590;
  letter-spacing: -.01em;
}
```

Hover:

- background чуть светлее, максимум `#effa54`;
- arrow сдвигается на 3px вправо/вверх;
- transition 160–200ms.

Pressed:

- `transform: translateY(1px)`;
- убрать дополнительный glow.

## 6.2. Secondary button

```css
.btn-secondary {
  min-height: 48px;
  padding: 0 18px;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.015);
  color: #d0d6e0;
}
```

Hover border: `rgba(255,255,255,.25)`.

## 6.3. Header CTA

В header использовать outline accent, не filled CTA.

```css
border: 1px solid rgba(228,242,34,.65);
color: #e4f222;
background: transparent;
```

## 6.4. Focus

Все интерактивные элементы:

```css
:focus-visible {
  outline: 2px solid #e4f222;
  outline-offset: 3px;
}
```

Никогда не отключать focus outline без замены.

---

# 7. Icon system

## 7.1. Общий стиль

Иконки:

- outline;
- geometric;
- без fill, кроме редких active states;
- stroke: 1.5–1.75px;
- round cap/join;
- визуальный размер: 22–28px;
- цвет default: `#d0d6e0`;
- accent icon: `#e4f222`.

Для React допустимо `lucide-react`. Если стек другой — inline SVG.

Не использовать emoji.

## 7.2. Icon container

Большинство feature-card icons:

```css
.icon-box {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(228,242,34,.20);
  border-radius: 8px;
  background: rgba(228,242,34,.025);
  color: #e4f222;
}
```

На mobile: 44x44.

## 7.3. Mapping

Рекомендуемая семантика:

| Смысл | Icon |
|---|---|
| Fast Studio / производство | `Clapperboard` |
| Контент | `Star` или `Sparkles` |
| Платформа | `MonitorPlay` / `PanelsTopLeft` |
| Distribution | `TrendingUp` / `Send` |
| Аналитика | `ChartNoAxesCombined` |
| Монетизация | `CircleDollarSign` |
| Mobile-first | `Smartphone` |
| Региональный рост | `Globe2` |
| Тест спроса | `SearchCheck` / `ChartSpline` |
| Контентные инсайты | `Lightbulb` |
| Партнёры | `UsersRound` |
| External link | `ArrowUpRight` |
| Next/action | `ArrowRight` |
| Email | `Mail` |

Telegram / WhatsApp лучше использовать официальные brand glyphs (например Simple Icons), но стилизовать одноцветно, без фирменного голубого/зелёного, чтобы не ломать общую палитру.

## 7.4. BeynePlay logo

В production использовать оригинальный SVG-логотип бренда. Не перерисовывать production logo по screenshot.

Visual reference:

- mark — компактный triangular/play glyph;
- mark — accent lime;
- wordmark — white;
- общий header logo lockup ≈ 130–150px wide на desktop.

Если SVG ещё не готов, временно использовать текстовый wordmark и отдельный placeholder mark, но оформить это как технический TODO перед launch.

---

# 8. Header / Navigation

## 8.1. Поведение

Header sticky:

```css
position: sticky;
top: 0;
z-index: 100;
```

Высота desktop: 72–80px.  
Mobile: 64px.

Фон при `scrollY < 24` практически прозрачный. После скролла:

```css
background: rgba(8,9,10,.78);
backdrop-filter: blur(16px);
border-bottom: 1px solid rgba(255,255,255,.07);
```

Переход 200ms.

## 8.2. Навигация

Desktop links:

- О проекте → `#about`
- Почему сейчас → `#why-now`
- Возможность → `#opportunity`
- Как работает экосистема → `#ecosystem`
- Партнёрам → `#partners`
- Команда → `#team`
- FAQ → `#faq`

При нехватке ширины можно убрать менее важные пункты до hamburger раньше, чем делать меню слишком тесным.

### Active nav

IntersectionObserver может подсвечивать текущую секцию:

- active text: `#ffffff`;
- inactive: `#8a8f98`;
- без underline по умолчанию;
- hover: `#d0d6e0`.

Не использовать глобальный вертикальный left slider / section rail. Он удалён намеренно.

## 8.3. Mobile nav

До `<= 900px`:

- logo слева;
- `Связаться` компактной кнопкой или скрыть в menu, в зависимости от ширины;
- hamburger справа.

Открытие menu:

- fullscreen/large dropdown dark surface;
- vertical links;
- direct contact links внизу;
- body scroll lock;
- Escape закрывает;
- focus trap;
- click по anchor закрывает menu.

---

# 9. Motion system

Motion должен добавлять ощущение качества, а не превращать страницу в demo.

## 9.1. Timing

```css
--ease-standard: cubic-bezier(.2,.8,.2,1);
--dur-fast: 180ms;
--dur-ui: 240ms;
--dur-reveal: 520ms;
```

## 9.2. Scroll reveal

Для крупных секций:

Initial:

```css
opacity: 0;
transform: translateY(16px);
```

Visible:

```css
opacity: 1;
transform: translateY(0);
transition: opacity 520ms, transform 520ms;
```

Stagger карточек: 60–80ms.

Не делать stagger > 500ms суммарно.

## 9.3. Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
```

## 9.4. Что нельзя анимировать постоянно

- все карточки;
- все icon glows;
- цифры бесконечным count-up loop;
- фоновые сетки;
- логотип;
- заголовки.

Допустимы единичные entry animations и очень медленный декоративный movement hero visual.

---

# 10. Section 01 — HERO

Reference: `assets/screens/01-hero.png`

## 10.1. Структура

Desktop: 2-column composition.

Left ≈ 52–56%.  
Right ≈ 44–48%.

Слева:

1. eyebrow / category;
2. H1;
3. основной paragraph;
4. короткая supporting line;
5. CTA row.

Справа:

- composed phone/product visual;
- subtle floor glow.

Снизу в пределах hero:

- compact 3-item fact strip.

## 10.2. H1

Основной H1 страницы один.

Пример структуры:

```html
<h1>
  BeynePlay —<br>
  <span class="text-muted-heading">платформа коротких<br>сериалов из Казахстана</span>
</h1>
```

Не добавлять дополнительные claims поверх hero.

## 10.3. CTA

Primary: `Обсудить партнёрство` → `#contact`.  
Secondary: Telegram direct URL.

Кнопки должны быть реальными `<a>`.

## 10.4. Product visual

### Production recommendation

Пока реального UI продукта нет или он нестабилен, не кодить всю внутренность телефонов как fake functional UI.

Лучший вариант:

- экспортировать composed phone visual как отдельный AVIF/WebP;
- использовать `<picture>`;
- `aria-hidden="true"` если purely decorative;
- alt пустой;
- `fetchpriority="high"` только если visual участвует в LCP и не загружает страницу слишком сильно.

Если отдельные phone frame + posters уже доступны, можно сделать layered composition HTML/CSS.

### Motion

Desktop pointer parallax:

- max translate 6–8px;
- rotation max 0.4deg;
- только при fine pointer;
- отключать reduced-motion.

Scroll parallax: максимум 12px за весь проход hero.

Никакого aggressive 3D tilt.

## 10.5. Fact strip

Три факта в одну строку desktop.

Каждый item:

- icon 48px;
- title/fact;
- short caption;
- separators 1px `#23252a` между items.

Это статическая информация. Не carousel desktop.

Mobile:

- horizontal `overflow-x:auto` с `scroll-snap-type:x mandatory`, если 3 cards не помещаются;
- scrollbar визуально скрыть, но scroll должен работать touch/trackpad;
- не добавлять стрелки, если swipe очевиден.

---

# 11. Section 02 — WHY NOW

Reference: `assets/screens/02-why-now.png`

## 11.1. Layout

Desktop:

- левый текстовый блок ~35–38%;
- справа/ниже 3 fact cards ~62–65%;
- источники отдельной строкой снизу.

Не делать график рынка, если он снова перегружает экран. Финальный вариант — три ясных claims.

## 11.2. Fact cards

1. `$11 млрд`
2. `$14 млрд`
3. `Из ниши в mainstream`

Карточки статические по содержанию.

Hover допускается только как feedback:

- border accent subtle;
- icon accent;
- translateY(-2px).

Не превращать карточки в ссылки, если ссылка относится к источнику, а не к конкретной карточке.

## 11.3. Sources

Источник — отдельные text links внизу.

- external icon `ArrowUpRight`, 14px;
- `target="_blank"`;
- `rel="noopener noreferrer"`;
- hover: text from fog → mist/white.

## 11.4. Mobile behavior

Карточки:

- 1 column;
- либо horizontal snap cards, если хотите сохранить slide feeling;
- предпочтительно stack, потому что всего 3 элемента и это проще для accessibility.

---

# 12. Section 03 — OPPORTUNITY

Reference: `assets/screens/03-opportunity.png`

## 12.1. Composition

Top split:

- text left;
- decorative geo visual right.

Bottom:

- 3 numbered opportunity cards.

Не добавлять статистики населения/интернета, если они не вошли в финальный content doc.

## 12.2. Globe/Kazakhstan visual

Это декоративный supporting visual, не data visualization.

Лучше использовать отдельный optimized image/SVG composite.

Motion optional:

- Kazakhstan glow opacity 0.7→1 once on entry;
- very slow 1–2px node drift;
- не вращать земной шар постоянно как 3D globe;
- никакой интерактивной карты — здесь она не нужна.

## 12.3. Content cards

Нумерация `01 / 02 / 03`.

Статические.

На hover:

- номер остаётся accent;
- border становится чуть ярче;
- icon может translateY(-1px).

No modal, no expansion.

---

# 13. Section 04 — WHAT IS BEYNEPLAY

Reference: `assets/screens/04-what-is-beyneplay.png`

## 13.1. Критически важное ограничение

**Не добавлять средний pipeline/stepper/arrow chain.**

Он был удалён, потому что визуально усложняет простой тезис.

Секция должна состоять из:

1. большой headline слева;
2. короткого explanatory paragraph справа;
3. четырёх numbered cards снизу.

## 13.2. Numbered cards

4 cards:

1. Контент создаётся под short-form поведение.
2. Спрос можно проверять до масштабного производства.
3. Платформа возвращает данные в контентный цикл.
4. Партнёры получают дистрибуцию, аналитику и варианты монетизации.

Каждая:

- icon top-left;
- number top-right;
- divider;
- title;
- body.

### Interactive state

Сами cards не ведут на отдельные страницы. Не делать cursor:pointer, если внутри нет ссылки.

Допустим `hover` styling только как декоративная реакция с `cursor:default`.

## 13.3. Responsive

Desktop: 4 columns.  
Tablet: 2x2.  
Mobile: 1 column.

Не делать mobile carousel — смысловые карточки важно прочитать последовательно.

---

# 14. Section 05 — HOW THE ECOSYSTEM WORKS

Reference: `assets/screens/05-ecosystem.png`

## 14.1. Цель блока

Показать 6 направлений как единую систему, но **без сложной инфографики**.

Не использовать:

- орбиты;
- круговые диаграммы;
- много стрелок;
- сложные линии между каждым элементом;
- pipeline с длинными описаниями;
- одновременно шесть открытых details panels.

## 14.2. Desktop visual model

Левая часть:

- eyebrow;
- H2;
- 3–4 строки explanatory text;
- optional compact link `Подробнее о каждом направлении` к `#partners` или без ссылки, если отдельного detail page нет.

Правая часть:

- 2x3 grid из шести вертикальных cards;
- небольшой BeynePlay hub/mark в центре пересечения rows/columns как декоративный знак;
- тончайшие короткие connectors допустимы только в background layer.

### Grid cards

01 Fast Studio  
02 Контент  
03 Платформа  
04 Distribution  
05 Аналитика  
06 Монетизация

Структура card:

```txt
icon
number
heading
small divider
2–4 lines description
```

## 14.3. Интерактивность

Рекомендуемое поведение desktop:

- при hover/focus конкретная card получает accent border;
- центральный hub получает +10% opacity/glow;
- другие cards НЕ должны сильно dim — максимум opacity .82, иначе чтение ухудшается;
- никаких popovers по hover.

Если click-функции нет, не делать card button.

### Scroll reveal

Grid cards появляются stagger 60ms по row order.

## 14.4. Mobile

На `< 768px`:

- убрать hub;
- убрать connector lines;
- 1-column cards;
- natural document flow;
- никаких nested horizontal/vertical scroll областей.

Это важно: mobile должен быть проще desktop-визуала.

---

# 15. Section 06 — FOR PARTNERS / PLATFORM BENEFITS

Reference: `assets/screens/06-partners.png`

## 15.1. Критически важное ограничение

Не возвращать screenshot/dashboard «партнёрской панели» справа.

В этой секции выгоды должны быть раскрыты напрямую, без fake interface.

## 15.2. Layout

Desktop:

Left 38–42%:

- eyebrow;
- headline;
- short paragraph;
- CTA row.

Right 58–62%:

- 2x3 benefit grid.

## 15.3. Benefit cards

6 смыслов:

1. Дистрибуция
2. Тестирование спроса
3. Аналитика
4. Монетизация
5. Контентные инсайты
6. Региональный рост

Карточки должны отвечать на вопрос «Что партнёр реально получает?», а не повторять описание экосистемы слово в слово.

### Отличие от Ecosystem

`Ecosystem` = из каких частей состоит BeynePlay.  
`Partners` = какую практическую ценность партнёр получает от этих частей.

Нельзя визуально и текстово сделать эти секции одинаковыми.

## 15.4. Interactions

- Primary CTA → `#contact`.
- Telegram direct.
- WhatsApp/Email direct.
- Benefit cards static; hover feedback optional.

На desktop card hover:

- icon box slight accent;
- border subtle accent;
- no reveal hidden text.

## 15.5. Mobile

CTA buttons stack full width.

Benefit cards 1 column.

---

# 16. Section 07 — TEAM

Reference: `assets/screens/07-team.png`

## 16.1. Content

Три ключевые роли:

- Индира Абеева — Founder
- Артём Костин — Co-founder / Product Lead · продукт, дизайн и аналитика
- Arai Kussainova — Co-Founder & Creative Director (BeynePlay Studio)

## 16.2. Layout

Desktop:

- intro 30–34%;
- 3 team cards 66–70%.

Cards same width.

## 16.3. Portraits

В reference используются стилизованные placeholders. Для production:

- заменить на реальные согласованные портреты или единый нейтральный art direction;
- aspect ratio 1:1 или 4:5 внутри card;
- изображения должны быть заранее кропнуты одинаково;
- не использовать AI-generated faces как финальные фотографии людей без явного решения команды.

Если реальных фото пока нет — нейтральные silhouette placeholders допустимы на pre-launch staging.

## 16.4. Team card interactions

По умолчанию static.

Если есть LinkedIn/profile URL:

- сделать имя/иконку внешней ссылкой;
- не делать всю card clickable без необходимости.

Hover:

- portrait +2% scale max;
- border subtle;
- duration 240ms.

---

# 17. Section 08 — FAQ

Reference: `assets/screens/08-faq.png`

## 17.1. Accordion

FAQ — реальная интерактивная секция.

Использовать semantic `<details>/<summary>` либо accessible accordion component.

Предпочтение: `<details>` с кастомной стилизацией, если дизайн можно сохранить.

## 17.2. Важное UX-решение

**Не делать внутренний vertical scrollbar на desktop.**

В макете scrollbar показан как визуальный вариант, но для реального лендинга nested scroll ухудшает UX. Пусть FAQ увеличивает высоту страницы.

Default:

- первый вопрос открыт;
- остальные закрыты.

Допускается открыть несколько одновременно. Это проще и ожидаемо для FAQ.

## 17.3. Accordion item

Collapsed:

- min-height 58–64px;
- number;
- question;
- plus/chevron.

Expanded:

- answer 14–16px;
- max text width 760–820px;
- vertical padding 18–22px;
- icon plus → minus or chevron rotates 180deg.

### Animation

Если native details без JS — можно оставить immediate open. Это предпочтительнее плохой height animation.

Если JS component:

- animate grid rows `0fr→1fr`;
- 220ms;
- respect reduced motion.

## 17.4. Questions

Все 12 вопросов из content doc должны присутствовать. Не сокращать список в коде.

## 17.5. CTA under FAQ

Compact bar/card:

`Готовы обсудить партнёрство?` + `Связаться с нами →`.

Это не modal trigger, а anchor `#contact`.

---

# 18. Section 09 — CONTACT

Reference: `assets/screens/09-contact.png`

## 18.1. Layout

Большой left-aligned final headline.

Под ним 3 direct-contact cards:

- Telegram
- WhatsApp
- Email

Затем один основной filled CTA.

Footer — внизу после divider.

## 18.2. Contact cards — интерактивные

Каждая card — полноценная `<a>` с `aria-label`.

Telegram:

```txt
https://t.me/...
```

WhatsApp:

```txt
https://wa.me/COUNTRYCODENUMBER
```

Email:

```txt
mailto:...
```

Не оставлять в production placeholder контакты из генерации.

### Hover

- icon accent remains;
- right arrow translateX(4px);
- border → accent-border;
- background slight surface-hover.

## 18.3. Footer

Минимальный:

Left:

- BeynePlay logo.

Right:

- О проекте
- Партнёрам
- Команда
- Политика конфиденциальности (только если страница реально существует; иначе не показывать fake link).

Optional copyright.

---

# 19. Static vs interactive matrix

| Element | Static / Interactive | Behavior |
|---|---|---|
| Hero heading/text | Static | Scroll reveal only |
| Hero phone visual | Decorative interactive-lite | Tiny parallax desktop only |
| Hero primary CTA | Interactive | Anchor to contact |
| Telegram button | Interactive | External direct link |
| Header nav | Interactive | Smooth anchor scroll |
| Header CTA | Interactive | Anchor to contact |
| Why-now cards | Static | Hover feedback only |
| Source links | Interactive | External links |
| Opportunity globe | Static/decorative | Optional entry glow/parallax |
| Opportunity cards | Static | Hover feedback only |
| What-is cards | Static | Numbered, no pipeline, hover only |
| Ecosystem cards | Static with interactive feedback | Focus/hover highlight |
| Ecosystem hub | Decorative | No click |
| Partner benefit cards | Static | Hover feedback only |
| Partner CTA buttons | Interactive | Contact/external links |
| Team cards | Static | Optional profile link only if real URL exists |
| FAQ rows | Interactive | Expand/collapse |
| FAQ CTA | Interactive | Anchor to contact |
| Contact cards | Interactive | Direct contact links |
| Footer nav | Interactive | Anchors/pages |

Принцип: не делать элемент clickable только потому, что он выглядит как card. Clickability должна означать реальное действие.

---

# 20. Responsive specification

## 20.1. Breakpoints

Рекомендуемые:

```css
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
--bp-2xl: 1536px;
```

Не строить дизайн исключительно вокруг bootstrap breakpoints; ориентироваться на момент, когда layout реально ломается.

## 20.2. Desktop ≥1280

- full nav;
- two-column sections;
- 4-column What-is cards;
- 2x3 ecosystem;
- 2x3 partners;
- 3 team cards row;
- generous 120–160px section padding.

## 20.3. Small desktop / tablet landscape 1024–1279

- reduce H1;
- header nav gaps 20–24px;
- ecosystem cards may become 3x2 narrower or 2 columns;
- partner grid 2 columns;
- hero visual slightly smaller.

## 20.4. Tablet 768–1023

- header hamburger;
- hero may remain 2 columns if visual fits, otherwise stack;
- What-is 2x2;
- Ecosystem 2 columns without central hub/connectors;
- partners 2 columns;
- team 1+2 layout or horizontal cards, but no nested scroll if avoidable.

## 20.5. Mobile <768

Global:

- content 20px gutter;
- all 2-column hero/sections stack;
- body max-width none;
- heading line breaks controlled minimally; do not force desktop `<br>` if it creates awkward wrapping.

Hero:

- text first;
- CTAs stacked or 2 columns only if each >= 140px;
- phone visual below, max-width 460px;
- fact strip horizontal snap or stacked.

Why now:

- cards stack.

Opportunity:

- text;
- geo visual;
- cards stack.

What-is:

- 1 col.

Ecosystem:

- 1 col;
- no hub;
- no connectors.

Partners:

- 1 col benefits;
- CTAs full width.

Team:

- 1 col cards.

FAQ:

- full width;
- questions 16px;
- no internal scrollbar.

Contact:

- 3 contact cards stack;
- primary CTA width 100%.

---

# 21. Accessibility requirements

Минимум WCAG-oriented практики:

1. Один `<h1>` на странице.
2. Каждая секция имеет `<h2>`.
3. FAQ questions — semantic controls.
4. Buttons vs links:
   - navigation/contact → `<a>`;
   - UI state change → `<button>`.
5. Keyboard navigation полностью работает.
6. Focus visible.
7. Tap targets минимум 44x44px.
8. Не полагаться только на accent color для понимания active state.
9. Decorative images `alt=""`.
10. Team portraits — meaningful alt, например `Индира Абеева`.
11. Text не запекать в raster visual.
12. External link icon не заменяет текстовую подпись.
13. Contrast body text не опускать ниже примерно `#8a8f98` на `#08090a` для длинных текстов; мелкие secondary labels могут быть темнее, но не ключевой content.
14. `aria-expanded`, `aria-controls` для custom accordion.
15. Mobile menu focus trap + Escape.

---

# 22. Performance requirements

Target:

- Lighthouse Performance desktop >= 90 при реальном хостинге;
- Accessibility >= 95;
- CLS ≈ 0;
- LCP <= 2.5s на нормальном 4G как ориентир.

## Images

- AVIF preferred;
- WebP fallback;
- указывать width/height/aspect-ratio;
- `loading="lazy"` ниже hero;
- hero visual preload/fetchpriority только после измерения.

Не загружать 9 design screenshots на production page. Они только reference.

## Fonts

- Inter Variable одним variable file через штатный механизм проекта или approved CDN/provider;
- font-display: swap;
- не грузить 8 отдельных weights.

## JS

Страница почти статическая. Не нужен тяжёлый JS bundle.

Интерактивы:

- mobile menu;
- active nav observer;
- FAQ;
- optional reveal observer;
- tiny hero parallax.

Не добавлять тяжёлый canvas/WebGL только ради globe или glow.

---

# 23. Implementation architecture

Framework-agnostic, но если это React/Next, рекомендуемая структура:

```txt
src/
  components/
    layout/
      Header.tsx
      Footer.tsx
      Container.tsx
    ui/
      Button.tsx
      IconBox.tsx
      SectionEyebrow.tsx
      FeatureCard.tsx
      ContactCard.tsx
      Accordion.tsx
    sections/
      Hero.tsx
      WhyNow.tsx
      Opportunity.tsx
      WhatIsBeynePlay.tsx
      Ecosystem.tsx
      Partners.tsx
      Team.tsx
      FAQ.tsx
      Contact.tsx
  data/
    landing.ts
  styles/
    tokens.css
    globals.css
    landing.css
  assets/
    brand/
    hero/
    opportunity/
    team/
```

## Data-driven content

Тексты повторяемых entities держать в arrays, а не hardcode 6 одинаковых blocks.

Пример:

```ts
export type Feature = {
  number?: string;
  title: string;
  description: string;
  icon: IconName;
};

export const ecosystem: Feature[] = [
  { number: '01', title: 'Fast Studio', description: '...', icon: 'clapperboard' },
  { number: '02', title: 'Контент', description: '...', icon: 'star' },
  // ...
];
```

FAQ:

```ts
export type FaqItem = {
  question: string;
  answer: string;
};
```

Это позволит менять текст без правок layout.

---

# 24. CSS grid guidance by section

## Hero

```css
.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(420px, .95fr);
  gap: clamp(48px, 6vw, 96px);
  align-items: center;
}
```

## What is

```css
.what-cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}
```

## Ecosystem

```css
.ecosystem-layout {
  display: grid;
  grid-template-columns: .75fr 1.25fr;
  gap: 72px;
  align-items: center;
}

.ecosystem-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px 28px;
}
```

Hub может быть absolute overlay только desktop. Не должен влиять на document flow.

## Partners

```css
.partners-layout {
  display: grid;
  grid-template-columns: .72fr 1.28fr;
  gap: 72px;
  align-items: start;
}

.benefit-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 16px;
}
```

На реальной ширине 1200 может быть лучше 3 columns x 2 rows; если карточки становятся слишком узкими — 2 columns x 3 rows. Читаемость важнее screenshot fidelity.

---

# 25. Scroll behavior

Global:

```css
html { scroll-behavior: smooth; }
```

Но при reduced motion — auto.

Не использовать scroll hijacking, fullpage.js, section snapping всей страницы.

То есть:

- обычный нативный vertical scroll;
- можно использовать horizontal scroll только на маленьких мобильных локальных card rows, где это реально нужно;
- никаких секций, которые «захватывают» колесо мыши.

Это особенно важно для инвестора, который хочет быстро пролистать страницу.

---

# 26. Hover / pointer behavior

Только `@media (hover:hover) and (pointer:fine)` применять hover motion, чтобы mobile не зависал в hover-state.

```css
@media (hover:hover) and (pointer:fine) {
  .card--interactive:hover { ... }
}
```

Никаких cursor-pointer на статических cards.

---

# 27. Recommended micro-interactions

Использовать максимум 5 типов, последовательно по сайту:

1. `Arrow nudge` — стрелка CTA 3–4px.
2. `Card lift` — 2px.
3. `Border accent` — subtle.
4. `Reveal` — translateY 16px.
5. `Accordion expand`.

Не придумывать уникальную animation для каждой секции.

---

# 28. Background decoration

Разрешено:

- very subtle radial glow;
- one low-opacity mesh/line detail;
- dark vignette around visual assets;
- floor glow beneath hero phones.

Запрещено:

- particles по всему сайту;
- множество moving dots;
- neon grids в каждой секции;
- glow вокруг всех icons;
- gradients в каждом card;
- bright image backgrounds за текстом.

---

# 29. Content width rules

Для длинных paragraph:

```css
max-width: 560px;
```

Для intro section body:

```css
max-width: 620px;
```

FAQ answer:

```css
max-width: 820px;
```

Не растягивать текст на 1000px+, даже если место есть.

---

# 30. Content fidelity

Все тексты брать из `source/BeynePlay_Landing_Content_v4.docx`.

Важно:

- не придумывать новую статистику;
- не возвращать цифры, которые убрали из документа;
- не публиковать fake contact data;
- не публиковать fake MVP date;
- не добавлять pricing/revenue share;
- не писать «лидер рынка», «№1», «миллионы зрителей», если это не подтверждено.

Для временных контактов использовать явные config placeholders в коде:

```ts
export const contacts = {
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? '#',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? '#',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
};
```

В production build CI должен ловить пустые placeholders либо они должны быть заменены до deploy.

---

# 31. Analytics events

Если подключается аналитика, минимальный event model:

```txt
landing_nav_click
landing_primary_cta_click
landing_telegram_click
landing_whatsapp_click
landing_email_click
landing_source_click
landing_faq_open
landing_section_view
```

Properties:

```txt
section
label
url
faq_index
```

Не отслеживать лишнее pointer movement/scroll depth каждую секунду.

Useful funnel:

- viewed hero;
- reached partners;
- reached contact;
- clicked contact channel.

---

# 32. SEO / metadata

Хотя аудитория B2B/investor, basic SEO нужен.

```html
<title>BeynePlay — платформа коротких сериалов из Казахстана</title>
<meta name="description" content="BeynePlay объединяет локальный контент, технологическую платформу, дистрибуцию, аналитику и монетизацию вокруг коротких сериалов." />
```

OpenGraph:

- custom 1200x630 image;
- не использовать полный screenshot с мелким текстом;
- logo + headline + hero visual.

`lang="ru"`, если основная версия русская.

Если позже появятся казахская/английская версии — реализовать i18n, не дублировать страницы вручную.

---

# 33. Semantic HTML skeleton

```html
<body>
  <header>...</header>
  <main>
    <section id="top" aria-labelledby="hero-title">...</section>
    <section id="why-now" aria-labelledby="why-title">...</section>
    <section id="opportunity" aria-labelledby="opportunity-title">...</section>
    <section id="about" aria-labelledby="about-title">...</section>
    <section id="ecosystem" aria-labelledby="ecosystem-title">...</section>
    <section id="partners" aria-labelledby="partners-title">...</section>
    <section id="team" aria-labelledby="team-title">...</section>
    <section id="faq" aria-labelledby="faq-title">...</section>
    <section id="contact" aria-labelledby="contact-title">...</section>
  </main>
  <footer>...</footer>
</body>
```

---

# 34. Desktop visual QA checklist

Перед приёмкой на ширине 1440/1536/1680 проверить:

- [ ] нет global left slider;
- [ ] header не выше ~80px;
- [ ] hero H1 не занимает >55% ширины;
- [ ] hero не перегружен больше чем 2 CTA + 3 facts;
- [ ] cards имеют 12px radius, а не большие «мобильные» скругления;
- [ ] только один bright accent color;
- [ ] text hierarchy построена белый → mist → fog;
- [ ] Why-now содержит 3 claims, не dashboard;
- [ ] Opportunity globe не конкурирует с headline;
- [ ] What-is не содержит pipeline;
- [ ] What-is cards пронумерованы;
- [ ] Ecosystem = 6 ясных cards, без orbit infographic;
- [ ] Partners не содержит fake interface screenshot;
- [ ] FAQ не имеет nested scrollbar;
- [ ] contact links реальные;
- [ ] footer минимальный.

---

# 35. Mobile visual QA checklist

На 375x812 и 390x844:

- [ ] нет horizontal page overflow;
- [ ] nav открывается и закрывается keyboard/touch;
- [ ] primary button не меньше 44px;
- [ ] H1 не получает single-word orphan lines без причины;
- [ ] hero visual не превышает viewport;
- [ ] ecosystem connectors/hub скрыты;
- [ ] cards идут natural flow;
- [ ] FAQ answer не обрезается;
- [ ] нет nested vertical scroll;
- [ ] contact cards полностью clickable;
- [ ] footer links легко нажимаются.

---

# 36. Definition of done

Вёрстка считается готовой, если:

1. Визуально она считывается как тот же дизайн-язык, что и финальные reference frames.
2. Она не является screenshot-based implementation.
3. Все 9 секций реализованы.
4. Все тексты соответствуют content v4.
5. Удалённые элементы не вернулись.
6. Desktop, tablet, mobile layouts осознанно адаптированы, а не просто уменьшены.
7. FAQ доступен с клавиатуры.
8. Contact CTA ведут на реальные каналы.
9. Нет console errors.
10. Нет CLS от изображений/fonts.
11. Reduced motion поддержан.
12. Контраст и focus states проверены.
13. Все external links безопасно открываются.
14. Page navigation не использует scroll hijacking.
15. Lighthouse и реальное ручное тестирование показывают нормальную скорость и usability.

---

# 37. Короткая инструкция Codex перед началом реализации

Можно использовать этот блок как верхнеуровневый implementation prompt:

> Реализуй адаптивный landing page BeynePlay по `BEYNEPLAY_CODEX_HANDOFF.md` и визуальным reference frames в `assets/screens/`. Не используй screenshots как готовые секции. Воссоздай композицию HTML/CSS, используя Inter, near-black canvas #08090a, white/gray typography, единственный accent #e4f222, hairline borders и 12px cards. Сохрани большое количество whitespace. Не добавляй глобальный левый slider, pipeline в секцию What is BeynePlay, orbital infographic в Ecosystem или dashboard screenshot в Partners. Используй обычный нативный vertical scroll. Сделай header sticky, anchor navigation, FAQ accordion, direct Telegram/WhatsApp/Email links, accessible focus states, responsive mobile menu и prefers-reduced-motion. Все повторяемые карточки/FAQ вынеси в data arrays. Все тексты бери из `source/BeynePlay_Landing_Content_v4.docx`. При конфликте между screenshot и спецификацией поведение и UX из спецификации имеют приоритет.

---

# 38. Что должно остаться статичным и спокойным

Особо зафиксировано, чтобы Codex не «улучшал» страницу лишней динамикой:

- заголовки не печатаются typewriter-анимацией;
- цифры не крутятся бесконечно;
- cards не floating;
- globe не является WebGL scene;
- ecosystem не является draggable canvas;
- team portraits не следят за курсором;
- contact cards не открывают модальные окна;
- scroll не snap-ится по full-screen секциям.

Главная интерактивность сайта — навигация, прямые CTA, аккуратные hover/focus states, FAQ и лёгкие scroll reveals.

---

# 39. Final visual principle

Если при реализации есть выбор между:

- «ещё одним красивым эффектом»
- и свободным пространством,

выбирать свободное пространство.

Если есть выбор между:

- сложной инфографикой,
- и 3–6 хорошо выстроенными смысловыми карточками,

выбирать карточки.

Если есть выбор между:

- точным повторением декоративной детали screenshot,
- и лучшим responsive UX,

выбирать responsive UX, сохраняя общий visual language.

BeynePlay должен ощущаться не как flashy entertainment promo, а как уверенная технологическая и контентная компания, которую можно воспринимать серьёзно как партнёра или инвестиционную возможность.
