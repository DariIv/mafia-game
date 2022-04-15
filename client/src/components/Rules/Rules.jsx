import React from 'react';
import { rolesData } from '../../rolesData'
import RoleAccordion from '../RoleAccordion/RoleAccordion';
import style from './Rules.module.css'

function Rules(props) {
  return (
    <div className={style.rulesWrap}>
      <h2>Правила игры</h2>

      <div className={style.rulesBlocksWrap}>

        <div className={style.rulesListWrap}>
          <h3 className={style.zagolowki}>Как играть в мафию</h3>
          <p className={style.text}>Роли «в закрытую» раздаются в начале игры в случайном порядке. Можно взять обычную карточную колоду или специальный набор для игры. Части игроков достаются роли законопослушных мирных граждан во главе с шерифом, наделенным особыми полномочиями. Это команда мирных жителей. Другим достаются роли мафиози, управляет которыми Дон. Цель каждой команды — найти всех противников и отправить их на виселицу.</p>
          <h5 className={style.zagolowki}>Игра делится на два этапа: чередующиеся «день» и «ночь».</h5>
          <h5 className={style.zagolowki}>Ночь знакомства</h5>
          <p className={style.text}>Когда роли розданы, ведущий объявляет о наступлении ночи, и все игроки закрывают глаза (или надевают маски, не позволяющие ничего видеть). После фразы ведущего «Мафия просыпается» все игроки-мафиози открывают глаза. Не говоря ни слова, они встречаются глазами, знакомятся друг с другом. Затем по сигналу ведущего мафия снова «засыпает», потом наступает день, и все открывают глаза.</p>
          <h5 className={style.zagolowki}>Первый день</h5>
          <p className={style.text}>
            Участникам нужно вычислить, кто из игроков — мафия. В первый день это сделать сложнее всего. Поэтому по разным вариантам правил в первый день участники или коротко рассказывают вымышленную биографию, или свое мнение о любом предмете или вопросе. Затем начинается общее обсуждение, в ходе которого можно использовать любые аргументы, или молчать, обвинять просто за то что игрок «не понравился» или защищать того, кто кажется безопасным. После обсуждения каждый игрок выставляет кандидата на голосование. Три кандидата, которых выставляли чаще всего, выходят на голосование. Игроки по сигналу ведущего голосуют за каждого. Тот, кто набрал большинство голосов, выбывает из игры — идет на виселицу. Если два игрока набрали одинаковое количество голосов, им даётся тридцать секунд на последнюю оправдательную речь, чтобы убедить оставить их в игре, затем происходит переголосование.
            После того, как игрок убит, он должен показать присутствующим свою карту. Так они узнают, кем он был на самом деле, мафией или мирным жителем.
          </p >
          <h5 className={style.zagolowki}>Вторая ночь</h5>
          <p className={style.text}>После первого дня в игре мафия снова наступает ночь. Ведущий объявляет «город засыпает, просыпается мафия». Игроки-мафиози открывают глаза, беззвучно договариваются между собой и глазами или бесшумно пальцем указывают ведущему на свою жертву. После убийства мафия засыпает, просыпается шериф и проверяет одного из игроков на принадлежность к мафии. Он показывает пальцем или глазами на подозреваемого, и ведущий должен показать в ответ шерифу палец вверх (что означает «это мирный житель») или вниз (соответственно — «это мафия»)</p>
          <h5 className={style.zagolowki}>Второй и последующие дни</h5>
          <p className={style.text}>На утро ведущий объявляет, кто был убит, и начинается дневное обсуждение о том, кого необходимо вывести из игры. Затем вновь голосование и так до тех пор, пока одна из команд не победит.
            В обсуждении могут использоваться любые аргументы — начиная от логических доказательств и заканчивая обвинениями соседей в том, что ночью они шевелились, а значит, принимали участие в мафиозной охоте.
            Игру можно усложнять и делать интереснее, вводя дополнительные роли: Доктор, Маньяк, Путана, Комиссар и другие.
          </p>
          <h5 className={style.zagolowki}>Количество игроков</h5>
          <p className={style.text}> В мафию играть можно и втроем. Но так будет неинтересно, игра быстро закончится. Наилучшее число игроков — 8-11, у такой компании будет время поиграть, аргументы каждого будут слышны и игра не затянется слишком долго.
            Как рассчитать, сколько будет мафии, сколько мирных?
            Мафия=(Общее число игроков/4).
            То есть, если играет компания из 8 человек, то мафиозо будет двое. Если за игровым столом собралось 9 человек, то трое из них — мафия.
          </p>
        </div>
        <div className={style.rolesAccordion}>
          <h3>Игровые роли</h3>
          <div className="accordion">
            {rolesData.map(({ title, content, image }) => (
              <RoleAccordion title={title} content={content} image={image}/>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Rules;
