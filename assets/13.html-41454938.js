import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as h,b as l,d,a as s,w as t,f as i}from"./app-ff44c1ee.js";const p={},m=i('<h2 id="Sec13" tabindex="-1"><a class="header-anchor" href="#Sec13" aria-hidden="true">#</a> 13.0 数目</h2><p>New Ithkuil 的记数系统在两个基本方面区别于西方语言：它是百进制<small class="parnt">以一百为基数</small>而非十进制<small class="parnt">以十为基数</small>；而且数本身是全功能的构形词<small class="parnt">即名词和动词</small>而非形容词。</p><h2 id="Sec13_1" tabindex="-1"><a class="header-anchor" href="#Sec13_1" aria-hidden="true">#</a> 13.1 百进制的特征</h2><p>用于枚举的百进制系统，从零至一百的数目被视为由单一词干表示的独立单元，并用单一的独立符号书写。从 101 开始，根据百位数加上个位数来表示数，就像十进制系统从 11 开始根据十位数加上个位数一样。然而，十进制系统在达到「10个十」后会将进位表示 100，而百进制系统在建立新的单位参照之前会持续到一万<small class="parnt">即「100个百」</small>。因此，数目 3254，在十进制系统中表示为3千2百5十4个单位，在百进制系统中则为32百54个单位，并且书写时只有两个数字<small class="parnt">一个表示32的字符和一个表示54的字符</small>。关于书写 New Ithkuil 数字的详细信息参见<a href="13#Sec13_3">第 13.3 节</a>。</p><div class="hint-container warning"><p class="hint-container-title">译者注</p><p>其实是每四位写成一个数字字符，所以数 3254 能写成单个数字；但在构形词方面是确实最少写成两个词 32 和 54<small class="parnt">这里的百可省略，见下文</small></p></div><p>在一百之后，独立的单位数和字符指派给了 100²<small class="parnt">即一万：一百个百</small>，然后是该数目的平方 100⁴<small class="parnt">一亿：一万个万</small>。最后一个单位是100⁸<small class="parnt">即一亿亿：一亿个亿</small>，这是该语言为之分配独立词根和符号的最后一个数。在一亿亿之后，数目被视为较低集合的倍数，类似于英语中说<q>one trillion quadrillion</q>而不是等值的<q>one octillion</q>。</p><p>虽然上述系统可能看起来很笨拙，但它实际上在系统化方面与西方的十进制数字相似。例如，在像 456,321,777,123 这样的西方数字中，逗号之间的每一组三个数字告诉人们有多少个1000的某次方的百位数<small class="parnt">即有 123个1000⁰、777个1000¹、321个1000²、和456个1000³，或者用更通俗的话说：有123个一、777个千、321个百万、456个十亿</small>，这称为三位分节法。同样的系统也适用于 New Ithkuil，只是「逗号之间」的数集应说是万数，而非千数。因此，如果我们用这样的系统改写西方数字 456,321,777,123，它将是 4563,2177,7123<small class="parnt">即 7123个10000⁰、2177个10000¹，以及4563个10000²，也就是7123个一、2177个万、以及4563个亿</small>，这称为四位分节法。</p><h2 id="Sec13_2" tabindex="-1"><a class="header-anchor" href="#Sec13_2" aria-hidden="true">#</a> 13.2 数词干的语义指称</h2><p>New Ithkuil 中 1-99 数的语义词干，是以 0-9 的词根为基础，在此之上增加 <code>TNX</code> 词缀 -rs 的九度所构造的。该词缀九度中的每一度，当应用于 10 个数词根之一时，都对应于 10 的一个额外倍数。</p><div class="tablo"><dl><dt>-VR-</dt><dd>0</dd></dl><dl><dt>-LL-</dt><dd>1</dd></dl><dl><dt>-KS-</dt><dd>2</dd></dl><dl><dt>-Z-</dt><dd>3</dd></dl><dl><dt>-PŠ-</dt><dd>4</dd></dl><dl><dt>-ST-</dt><dd>5</dd></dl><dl><dt>-CP-</dt><dd>6</dd></dl><dl><dt>-NS-</dt><dd>7</dd></dl><dl><dt>-ČK-</dt><dd>8</dd></dl><dl><dt>-LẒ-</dt><dd>9</dd></dl><dl><dt>-J-</dt><dd>10</dd></dl><dl><dt>-GZ-</dt><dd>100</dd></dl><dl><dt>-PC-</dt><dd>100²</dd></dl><dl><dt>-KẒ-</dt><dd>100⁴</dd></dl><dl><dt>-ČG-</dt><dd>100⁸</dd></dl></div><p>在需要用于计数和涉及非十进制基数<small class="parnt">最高可达十六进制</small>的数学运算时，以下六个数词根被用于表示十之上的数目。它们也可以作为使用 <code>TNX</code> 词缀的标准十/百进制形式的「简替」形式。</p><div class="tablo"><dl><dt>-CG-</dt><dd>11</dd></dl><dl><dt>-JD-</dt><dd>12</dd></dl><dl><dt>-ĻJ-</dt><dd>13</dd></dl><dl><dt>-BC-</dt><dd>14</dd></dl><dl><dt>-ŢẒ-</dt><dd>15</dd></dl></div>',12),_={class:"hint-container details"},b={class:"t"},g=l("abbr",null,"TNX",-1),f=i("<p>与数词根 0 至 9 一起使用以创造数目 11-99</p><ol><li>X plus 10<br> X 加 10</li><li>X plus 20<br> X 加 20</li><li>X plus 30<br> X 加 30</li><li>X plus 40<br> X 加 40</li><li>X plus 50<br> X 加 50</li><li>X plus 60<br> X 加 60</li><li>X plus 70<br> X 加 70</li><li>X plus 80<br> X 加 80</li><li>X plus 90<br> X 加 90</li></ol>",2),v=l("p",null,[d("所有数目都是全功能的构形词，表示一个集合包含特定数目的成员。「简明的」日常计数系统是以 100 为基数"),l("small",{class:"parnt"},"数学子语言将使用以 12 为基数"),d("。由「二」开始，该词干&详述模式以下面词根 -Z- 「三」说明。数目 11-99 都是用 "),l("code",null,"TNX"),d(" 词缀构成的。从数目 101 开始，数目的构造方法与 Ithkuil 2011 一样，使用伴随格 "),l("code",null,"COM"),d(" 和 "),l("code",null,"COO"),d(" 词缀。由于没有倍数，词根「零」和「一」有不同的词干&详述模式。")],-1),w=l("p",null,[d("相关词缀："),l("code",null,"XX3")],-1),y=l("p",null,[l("code",null,"S1")],-1),X=l("div",{class:"indent"},[l("dl",null,[l("dt",null,"BSC"),l("dd",null,"(to be a) set or group of three entities; (to be) a trio"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个三个成员的集合；三个")])]),l("dl",null,[l("dt",null,"CTE"),l("dd",null,"(to be) a party/entity of whom/which there are three"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一方/实体，其中有三个成员")])]),l("dl",null,[l("dt",null,"CSV"),l("dd",null,"(to be) a process which determines/identifies a set as being three in number; to count out to three; to determine that there are three of something"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个判断、识别一个集合成员为数量三的过程；数到三；判断、确定某物有三个")])]),l("dl",null,[l("dt",null,"OBJ"),l("dd",null,"(to be) one in a group or sequence of 3; to be one of 3"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个数量三的组或序列中的一个成员；三个中的一个")])])],-1),S=l("p",null,[l("code",null,"S2")],-1),C=l("div",{class:"indent"},[l("dl",null,[l("dt",null,"BSC"),l("dd",null,"(to be) something manifesting three aspects / facets; to manifest trinariness; be trinary"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("体现三个方面/方面的东西； 彰显三元性；三种、三方面、三元、三倍的")])]),l("dl",null,[l("dt",null,"CTE"),l("dd",null,"(to be) the state of having three aspects/facets; to be trinary; to be tri-fold or tri-faceted"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("有三方面的状态")])]),l("dl",null,[l("dt",null,"CSV"),l("dd",null,"(to be) a process which determines/identifies an entity as having three aspects/facets; identify/determine that something is trinary/tri-fold/tri-faceted"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个判断、识别一个实体有三个方面的过程；判断、确定某物是三元、三面、三倍的")])]),l("dl",null,[l("dt",null,"OBJ"),l("dd",null,"(to be) one of the aspects/facets of a trinary, tri-fold, tri-faceted entity"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("三元、三方面、三倍的实体之一")])])],-1),z=l("p",null,[l("code",null,"S3")],-1),k=l("div",{class:"indent"},[l("dl",null,[l("dt",null,"BSC"),l("dd",null,"(to be) the third entity/party in a group or sequence"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一组或序列中的第三个实体/一方；第三")])]),l("dl",null,[l("dt",null,"CTE"),l("dd",null,"(to be) the state of being third in a sequence/group/pattern"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个处于一个序列、组、模式中的第三个的状态")])]),l("dl",null,[l("dt",null,"CSV"),l("dd",null,"(to be) a process which determines/identifies an entity’s sequential place in a sequence or group/pattern to be third"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个判断、识别一个实体在一组或序列中的序位为第三个的过程；")])]),l("dl",null,[l("dt",null,"OBJ"),l("dd",null,"(to be) the entity/party whose numerical place in a sequence/group/pattern is third"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("在一个序列/组/模式中数字位置为第三的实体/一方")])])],-1),T=l("p",null,[d("相关词缀："),l("code",null,"XX0")],-1),q=l("p",null,[l("code",null,"S1")],-1),B=l("div",{class:"indent"},[l("dl",null,[l("dt",null,"BSC"),l("dd",null,"(to be) zero as the empty-set / a set having no members; to have no quantity or amount"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个空集、一个没有成员的集合；零个；没有量")])]),l("dl",null,[l("dt",null,"CTE"),l("dd",null,"(to be) a party/entity of whom/which there are no members"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一方/实体，其中有零个成员")])]),l("dl",null,[l("dt",null,"CSV"),l("dd",null,"(to be) a set having no members; to have no (i.e., zero) members in a set"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个判断、识别一个集合成员为数量零的过程；数到零；判断、确定某物数量为零；一个集合中没有成员")])]),l("dl",null,[l("dt",null,"OBJ"),l("dd",null,"(to be) a null value / a value for a parameter that is undefined and/or for which the expected or standard value(s) is/are inapplicable"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("空值；未定义或预期/标准值不可用的参数的值")])])],-1),O=l("p",null,[l("code",null,"S2")],-1),x=l("div",{class:"indent"},[l("dl",null,[l("dt",null,"BSC"),l("dd",null,"(to be) the zero-dimension; to have geometrically no length, area or volume"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("零维；没有几何学上的长度、面积或体积")])]),l("dl",null,[l("dt",null,"CTE"),l("dd",null,"(to be) the state of having no substance/tangibility due to being zero-dimensional"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个由于是零维的而没有实质/有形性的状态")])]),l("dl",null,[l("dt",null,"CSV"),l("dd",null,"(to be) the process/act of determining/identifying zero-dimensionality"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个判断、识别零维性的过程；判断、确定某物是零维的")])]),l("dl",null,[l("dt",null,"OBJ"),l("dd",null,"(to be) an entity having zero-dimensionality; (to be) a Euclidean point; to have geometrically no length, area or volume, i.e., to be a Euclidean point"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("具有零维性的实体；欧几里得点；具有零维性，即存在一个欧几里得点")])])],-1),N=l("p",null,[l("code",null,"S3")],-1),E=l("div",{class:"indent"},[l("dl",null,[l("dt",null,"BSC"),l("dd",null,"(to be) the baseline “zero”-state or null-state in a sequence, hierarchy, gradient, pattern, etc."),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个序列、等级制度、梯度、模式等中的基线「零」状态或「无」状态")])]),l("dl",null,[l("dt",null,"CTE"),l("dd",null,"(to be) the state of being the baseline “zero”-state or null-state"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个处于基线「零」状态或「无」状态下的状态")])]),l("dl",null,[l("dt",null,"CSV"),l("dd",null,"(to be) a process which determines/identifies an entity’s being the baseline “zero”-state or null-state"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个判断、识别一个实体的基线「零」状态、「无」状态的过程")])]),l("dl",null,[l("dt",null,"OBJ"),l("dd",null,"(to be) the entity/party in the baseline “zero”-state or null-state in a sequence, hierarchy, gradient, pattern, etc."),l("dd",null,[l("small",{class:"parnt"},"存在"),d("处于一个序列、等级制度、梯度、模式等中的基线「零」状态或「无」状态的实体/一方")])])],-1),V=l("p",null,[l("code",null,"S1")],-1),A=l("div",{class:"indent"},[l("dl",null,[l("dt",null,"BSC"),l("dd",null,"(to be) a set or group of one; to have one member"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个一个成员的集合；一个")])]),l("dl",null,[l("dt",null,"CTE"),l("dd",null,"(to be) a party/entity of whom/which there is only one"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一方/实体，其中只有一个")])]),l("dl",null,[l("dt",null,"CSV"),l("dd",null,"(to be) a process which determines/identifies a set as being one in number; to count out to one; to determine that there is only one of something"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个判断、识别一个集合成员为数量一的过程；数到一；判断、确定某物只有一个")])]),l("dl",null,[l("dt",null,"OBJ"),l("dd",null,"[same as CTE]"),l("dd",null,"【与内容述一致】")])],-1),J=l("p",null,[l("code",null,"S2")],-1),L=l("div",{class:"indent"},[l("dl",null,[l("dt",null,"BSC"),l("dd",null,"(to be) something (quasi-)indivisible, (quasi-)inseparable, unified, unitary, united, a union, a unit"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个(准)不可分割、(准)不可分离、统一、单一、合一、一元的东西；并集；一个单位")])]),l("dl",null,[l("dt",null,"CTE"),l("dd",null,"(to be) the state of having only one functional aspect/facet; to function/manifest as a unified whole or unit"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("只有一个功能性方面的状态；作为一个统一的整体或单位运作/表现出来")])]),l("dl",null,[l("dt",null,"CSV"),l("dd",null,"(to be) a process which determines/identifies an entity as having only one functional aspect/facet; to determine that an entity is a (quasi-)indivisible whole/unit"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个判断、识别一个实体只有一个功能性方面的过程；判断、确定一个实体是一个"),l("small",{class:"parnt"},"准"),d("不可分割的整体、单元")])]),l("dl",null,[l("dt",null,"OBJ"),l("dd",null,"(to be) the party/entity having only one functional aspect/facet; to be an entity which functions/manifests as single unit"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一方、实体，其只有一个功能性方面；一个运作、表现为一个单元的实体")])])],-1),j=l("p",null,[l("code",null,"S3")],-1),P=l("div",{class:"indent"},[l("dl",null,[l("dt",null,"BSC"),l("dd",null,"(to be) the first entity/party in a group or sequence"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一组或序列中的第一个实体/一方；第一")])]),l("dl",null,[l("dt",null,"CTE"),l("dd",null,"(to be) the state of being first in a sequence/group/pattern"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个处于一个序列、组、模式中的第一个的状态")])]),l("dl",null,[l("dt",null,"CSV"),l("dd",null,"(to be) a process which determines/identifies an entity’s sequential place in a sequence or group/pattern to be first"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("一个判断、识别一个实体在一组或序列中的序位为第一个的过程")])]),l("dl",null,[l("dt",null,"OBJ"),l("dd",null,"(to be) the entity/party whose numerical place in a sequence/group/pattern is first"),l("dd",null,[l("small",{class:"parnt"},"存在"),d("在一个序列/组/模式中数字位置为第一的实体/一方")])])],-1),R=l("p",null,[d("以下词缀基于数词根；其九个程度的含义如右所示。"),l("small",{class:"parnt"},[d("以丙型 "),l("code",null,"TNX"),d(" 词缀辅助可用于构建词如「三十四只猫的一个集合」")])],-1),Z={class:"tablo"},I=l("dl",null,[l("dt",null,"-ks"),l("dd",null,"XX2*"),l("dd",null,"【二】")],-1),G=l("dl",null,[l("dt",null,"-z"),l("dd",null,"XX3*"),l("dd",null,"【三】")],-1),H=l("dl",null,[l("dt",null,"-pš"),l("dd",null,"XX4*"),l("dd",null,"【四】")],-1),M=l("dl",null,[l("dt",null,"-st"),l("dd",null,"XX5*"),l("dd",null,"【五】")],-1),U=l("dl",null,[l("dt",null,"-cp"),l("dd",null,"XX6*"),l("dd",null,"【六】")],-1),K=l("dl",null,[l("dt",null,"-ns"),l("dd",null,"XX7*"),l("dd",null,"【七】")],-1),D=l("dl",null,[l("dt",null,"-čk"),l("dd",null,"XX8*"),l("dd",null,"【八】")],-1),Q=l("dl",null,[l("dt",null,"-lẓ"),l("dd",null,"XX9*"),l("dd",null,"【九】")],-1),Y=l("dl",null,[l("dt",null,"-j"),l("dd",null,"X10*"),l("dd",null,"【十】")],-1),F=l("dl",null,[l("dt",null,"-gz"),l("dd",null,"XOH*"),l("dd",null,"【百】")],-1),W=l("dl",null,[l("dt",null,"-pc"),l("dd",null,"XTT*"),l("dd",null,"【万】")],-1),$=l("dl",null,[l("dt",null,"-kẓ"),l("dd",null,"XTM*"),l("dd",null,"【亿】")],-1),ll=l("dl",null,[l("dt",null,"-čg"),l("dd",null,"XTQ*"),l("dd",null,"【亿亿】")],-1),dl=l("dl",null,[l("dt",null,"-cg"),l("dd",null,"X11*"),l("dd",null,[d("【十一】"),l("small",{class:"parnt"},"用于高于十进制的语境")])],-1),tl=l("dl",null,[l("dt",null,"-jd"),l("dd",null,"X12*"),l("dd",null,[d("【十二】"),l("small",{class:"parnt"},"用于高于十进制的语境")])],-1),nl=l("dl",null,[l("dt",null,"-ļj"),l("dd",null,"X13*"),l("dd",null,[d("【十三】"),l("small",{class:"parnt"},"用于高于十进制的语境")])],-1),el=l("dl",null,[l("dt",null,"-bc"),l("dd",null,"X14*"),l("dd",null,[d("【十四】"),l("small",{class:"parnt"},"用于高于十进制的语境")])],-1),sl=l("dl",null,[l("dt",null,"-ţẓ"),l("dd",null,"X15*"),l("dd",null,[d("【十五】"),l("small",{class:"parnt"},"用于高于十进制的语境")])],-1),al=l("dt",null,"-vj",-1),il=l("dd",null,"UHN",-1),ul=l("small",{class:"parnt"},"如 zillion 无数、成千上万等",-1),ol=l("p",null,"补充上述基于数字词根的词缀，表示「零」及「一」的词根也有相关词缀与右述的程度模式，以提供如「三十一只猫的一个集合」的表达。",-1),rl=l("div",{class:"tablo"},[l("dl",null,[l("dt",null,"-zc"),l("dd",null,"XX1"),l("dd",null,"【一】")]),l("dl",null,[l("dt",null,"-vr"),l("dd",null,"XXZ*"),l("dd",null,"【零】")])],-1),cl=l("ol",null,[l("li",null,[d("being the #th member of a set per sequential physical arrangement"),l("br"),d(" 按照物理排列顺序，为一个集合中的第#个成员")]),l("li",null,[d("being the #th member of a set per conventionalized/agreed-upon order"),l("br"),d(" 按照常规化/商定"),l("small",{class:"parnt"},"经过一致同意"),d("顺序，为一个集合的第#个成员")]),l("li",null,[d("being the #th member of a set per hierarchical order"),l("br"),d(" 按照等级制度，为一个集合的第#个成员")]),l("li",null,[d("being the #th member of a set per contextual/circumstantial order*"),l("br"),d(" 按照语境/情况或形势的顺序，为一个集合的第#个成员*")]),l("li",null,[d("being/having #-number of members or instances/occurrences"),l("br"),d(" 为/有#个成员、实例、事件")]),l("li",null,[d("being/having at least #-number of members or instances/occurrences"),l("br"),d(" 为/有至少#个成员、实例、事件")]),l("li",null,[d("being/having #-number of parts/sections"),l("br"),d(" 为/有#个零件/部分")]),l("li",null,[d("being/having #-number of nodes/hubs/connections/access points"),l("br"),d(" 为/有#个节点/枢纽/连接/访问点")]),l("li",null,[d("being/having #-number of nodes/hubs/connections/access points"),l("br"),d(" 为/有#个层次的水平/层数")])],-1),hl=l("p",null,"* 即一个集合中的第#个成员做了某事或某事发生在其身上",-1),pl=i('<h2 id="Sec13_3" tabindex="-1"><a class="header-anchor" href="#Sec13_3" aria-hidden="true">#</a> 13.3 书写数字</h2><p>书写数字时，数字之核心为数目 0-9 的十个字符，书写该字符的延伸部分以表示增加十位数或百位数。附加标记则表示增加千位数<small class="parnt">最大 9000</small>。因此，书写数目 0-9999 只需单个<small class="parnt">复合</small>字符。数目 10000-100⁴ 类似地由放置在核心「千位数」字符前的第二个字符表示。</p><figure><img src="http://ithkuil.net/newithkuil_13_numbers_files/image002.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>左下角的延伸部分表示十位数：</p><figure><img src="http://ithkuil.net/newithkuil_13_numbers_files/image003.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>右上角的延伸部分表示百位数：</p><figure><img src="http://ithkuil.net/newithkuil_13_numbers_files/image004.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>左上方四分之一处放置附加符以示千位数</p><figure><img src="http://ithkuil.net/newithkuil_13_numbers_files/image005.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>例子：</p><figure><img src="http://ithkuil.net/newithkuil_13_numbers_files/image007.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="Sec13_4" tabindex="-1"><a class="header-anchor" href="#Sec13_4" aria-hidden="true">#</a> 13.4 话语中的数目表达</h2><p>口语数目由上述词干形成，并使用部分格和伴随格，以及 <code>COO</code> 词缀 -Vň/1<small class="parnt">= -iň</small>。最大基数单位数目是通过将基数单位词词形变化于部分格表示的。如果其后是另一组较小的基数单位，那么该较小基数单位的数目词形变化于伴随格以连接之，而较小基数单位词又词形变化于部分格。当单个单位<small class="parnt">1-99</small>是百位数或更大基数单位的一部分时，用 <code>COO</code> 词缀连接之。</p><p>需要注意的是，在读大于 199 的数目时，只要不导致歧义或不清晰，省略指百位数的 gzalui<small class="parnt">= gzal 「一百」的部份格形式</small>是正常的。这相当于英语口语中的习惯，将<q>three hundred (and) twelve</q>说成<q>three twelve</q>。 例子：</p><div class="indent"><dl class="gloss"><dt>ksalirsa</dt><dd>42</dd></dl><dl class="gloss"><dt>(gzalui)</dt><dd>百</dd></dl><dl class="gloss"><dt>walẓärs</dt><dd>29</dd></dl><div class="glend">4229</div><dl class="gloss"><dt>cpalärsa</dt><dd>26</dd></dl><dl class="gloss"><dt>wapcui</dt><dd>万</dd></dl><dl class="gloss"><dt>wansorsë’i</dt><dd>带97</dd></dl><dl class="gloss"><dt>(gzalui)</dt><dd>百</dd></dl><dl class="gloss"><dt>cpalörs</dt><dd>66</dd></dl><div class="glend">26,9766</div><dl class="gloss"><dt>wallärsa</dt><dd>21</dd></dl><dl class="gloss"><dt>gzalui</dt><dd>百</dd></dl><dl class="gloss"><dt>wapcui</dt><dd>万</dd></dl><div class="glend">2100,0000</div><div class="expln">注意此例 gzalui 不可省 </div><dl class="gloss"><dt>ksalorsa</dt><dd>72</dd></dl><dl class="gloss"><dt>gzalui</dt><dd>百</dd></dl><dl class="gloss"><dt>walẓorsiň</dt><dd>又79</dd></dl><dl class="gloss"><dt>wakẓui</dt><dd>亿</dd></dl><dl class="gloss"><dt>za’lëi</dt><dd>带3</dd></dl><dl class="gloss"><dt>gzalui</dt><dd>百</dd></dl><dl class="gloss"><dt>zalëirsiň</dt><dd>又53</dd></dl><dl class="gloss"><dt>wapcui</dt><dd>万</dd></dl><dl class="gloss"><dt>pša’lersëi vralörs</dt><dd>带3460</dd></dl><div class="glend">7279,0353,3460</div></div><h2 id="Sec13_5" tabindex="-1"><a class="header-anchor" href="#Sec13_5" aria-hidden="true">#</a> 13.5 日期和一天的时刻</h2><p><code>SPT</code> 词缀可用于表达一天的小时、一周的一天、一月的一周、一年的一月、年份和世纪。它与数词根<small class="parnt">通常是词干三</small>一起使用，例如「一天的第八个小时」「一周的第三天<small class="parnt">即星期三</small>」或「5月20日」等等。此外, 该词缀可以依次被丙型数词缀<small class="parnt">例如<code>XX2</code>/<code>XX3</code>等等</small>所修饰，以列举为词缀所命名的更高阶的时间段。如 wuksärsëirwa「该月的第22天」，<code>SPT/5</code> 词缀 -ëirw- wuksärsëirwiasta「5月22号」。其他丙型词缀也可以同样的方式使用，如下面第三个例子。</p>',17),ml={class:"t"},_l=l("abbr",null,"SPT",-1),bl=l("ol",null,[l("li",null,[d("second(s) of a/the minute"),l("br"),d(" 分钟内的……秒")]),l("li",null,[d("minute(s) of an/the hour"),l("br"),d(" 小时内的……分钟")]),l("li",null,[d("hour [and minutes] of the day, i.e., time of day"),l("br"),d(" 该日内的……小时/点【与分】即一天内时间")]),l("li",null,[d("day of the week [1st day of week = Monday]"),l("br"),d(" 该周内的……日【周的第一天 = 星期一】")]),l("li",null,[d("day of the month"),l("br"),d(" 该月内的……日")]),l("li",null,[d("week of the month"),l("br"),d(" 该月内的……周")]),l("li",null,[d("month of the year"),l("br"),d(" 该年内的……月")]),l("li",null,[d("year"),l("br"),d(" ……年")]),l("li",null,[d("century"),l("br"),d(" ……世纪")])],-1),gl=l("ul",null,[l("li",null,"1969年3月15号 wustarsëirwiaza walẓarsa’o walẓörsürwë’i"),l("li",null,"在星期六 wucpirwa’o"),l("li",null,"在下周星期六 wucpirwölţa’o"),l("li",null,"21世纪 wullärsurya"),l("li",null,"到34秒的时候 wupšersaryo’a")],-1),fl=l("p",null,"使用词缀程度 3 表示一天内时间：",-1),vl=l("ul",null,[l("li",null,[d("八点五十二分 wučkerwa ksalëirsoň"),l("br"),d(" 【注意第二个词使用了 "),l("code",null,"COO/7"),d(" 词缀；该短语字面意思是「该天中的第八个小时和五十二"),l("small",{class:"parnt"},"分钟"),d("」，其中第一个词中 "),l("code",null,"SPT/3"),d(" 词缀暗示可能其后存在分钟数】")]),l("li",null,[d("二十点五十二分三十三秒 wuvrärserwa ksalëirsoň wazersarwë’i"),l("br"),d(" 【字面意思：该天中的第二十个小时和五十二个"),l("small",{class:"parnt"},"分钟"),d("与一分钟内的三十三秒】")])],-1),wl=i('<h3 id="Sec13_5_1" tabindex="-1"><a class="header-anchor" href="#Sec13_5_1" aria-hidden="true">#</a> 13.5.1 月份别名</h3><p>前四个月的名称是通过缀附在词根 -RḐ- 「日历月」词干三上的乙型 <code>SEQ</code> 词缀 -nt 程度一至四来表示「第一个月」「第二个月」「第三个月」「第四个月」。同样，最后四个月可以利用同一词缀的程度六至九表示。</p><p>对于其余的月份<small class="parnt">以及作为前四个月和后四个月的别名</small>，使用乙型 <code>XX(#)</code> 词缀<small class="parnt">使用非十进制基数 -CG- 和-JD- 表示 11 和 12 </small>因此：</p><ul><li>一月 wurḑainta / wurḑauzca</li><li>二月 wurḑaunta / wurḑauks</li><li>三月 wurḑeinta / wurḑauz</li><li>四月 wurḑeunta / wurḑaupš</li><li>五月 wurḑaust</li><li>六月 wurḑaucpa</li><li>七月 wurḑauns</li><li>八月 wurḑaučka</li><li>九月 wurḑounta / wurḑaulẓa</li><li>十月 wurḑointa / wurḑauj</li><li>十一月 wurḑiunta / wurḑaucga</li><li>十二月 wurḑuinta / wurḑaujda</li></ul>',4);function yl(Xl,Sl){const a=o("tooltip"),u=o("Tabs");return c(),h("div",null,[m,l("details",_,[l("summary",null,[l("span",b,[d("-rs | "),g,d(" | "),s(a,{label:"Multiples of Ten"},{default:t(()=>[d("十的倍数")]),_:1})])]),f]),v,s(u,{id:"89",data:[{id:"-Z-"},{id:"-VR-"},{id:"-LL-"}]},{title0:t(({value:n,isActive:e})=>[d("-Z-")]),title1:t(({value:n,isActive:e})=>[d("-VR-")]),title2:t(({value:n,isActive:e})=>[d("-LL-")]),tab0:t(({value:n,isActive:e})=>[l("p",null,[d("-Z- "),s(a,{label:"THREE / TRINARY"},{default:t(()=>[d("三/三元")]),_:1})]),w,y,X,S,C,z,k]),tab1:t(({value:n,isActive:e})=>[l("p",null,[d("-VR- "),s(a,{label:"ZERO / NULL"},{default:t(()=>[d("零、无")]),_:1})]),T,q,B,O,x,N,E]),tab2:t(({value:n,isActive:e})=>[l("p",null,[d("-LL- "),s(a,{label:"ZERO / NULL"},{default:t(()=>[d("一、一体")]),_:1})]),V,A,J,L,j,P]),_:1}),R,s(u,{id:"169",data:[{id:"数词缀"},{id:"数词缀程度"}]},{title0:t(({value:n,isActive:e})=>[d("数词缀")]),title1:t(({value:n,isActive:e})=>[d("数词缀程度")]),tab0:t(({value:n,isActive:e})=>[l("div",Z,[I,G,H,M,U,K,D,Q,Y,F,W,$,ll,dl,tl,nl,el,sl,l("dl",null,[al,il,l("dd",null,[s(a,{label:"Uncountably High Number"},{default:t(()=>[d("不可数大数")]),_:1}),ul])])]),ol,rl]),tab1:t(({value:n,isActive:e})=>[cl,hl]),_:1}),pl,s(u,{id:"283",data:[{id:"SPT"},{id:"用例"}]},{title0:t(({value:n,isActive:e})=>[d("SPT")]),title1:t(({value:n,isActive:e})=>[d("用例")]),tab0:t(({value:n,isActive:e})=>[l("p",null,[l("span",ml,[d("-rw/-ry | "),_l,d(" | "),s(a,{label:"Specified Points in Calendrical Time"},{default:t(()=>[d("历法指定时刻")]),_:1})])]),bl]),tab1:t(({value:n,isActive:e})=>[gl,fl,vl]),_:1}),wl])}const kl=r(p,[["render",yl],["__file","13.html.vue"]]);export{kl as default};
