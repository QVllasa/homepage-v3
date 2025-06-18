import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetStaticProps} from 'next';

export default function Legal() {
    return (
        <div className="relative overflow-hidden bg-white transition dark:bg-slate-900 py-16">
            <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
                <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                    <svg
                        className="absolute top-12 left-full translate-x-32 transform"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-slate-800"
                                      fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"/>
                    </svg>
                    <svg
                        className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-slate-800"
                                      fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
                    </svg>
                    <svg
                        className="absolute bottom-12 left-full translate-x-32 transform"
                        width={404}
                        height={384}
                        fill="none"
                        viewBox="0 0 404 384"
                    >
                        <defs>
                            <pattern
                                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-slate-800"
                                      fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"/>
                    </svg>
                </div>
            </div>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg">
                    <h1>
                        <span
                            className="block text-center text-lg font-semibold text-blue-600 dark:text-yellow-500 transition">Impressum</span>
                        <span
                            className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                            Angaben gem&auml;&szlig; &sect; 5 TMG
                        </span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-gray-500 dark:text-slate-300 transition">
                        Qendrim Vllasa<br/>
                        Lohstrasse 7<br/>
                        8280 Kreuzlingen <br/>
                        Schweiz
                    </p>
                    <h1>
                        <span
                            className="mt-24 block text-center text-lg font-semibold text-blue-600 dark:text-yellow-500 transition">Kontakt</span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-gray-500 dark:text-slate-300 transition">
                        Telefon: +49 (0) 151 56 42 48 31<br/>
                        E-Mail: qendrim.vllasa@gmail.com
                    </p>
                    <h1>
                        <span
                            className="mt-24 block text-center text-lg font-semibold text-blue-600 dark:text-yellow-500 transition">Streitschlichtung</span>
                    </h1>

                </div>
                <div className="prose prose-lg prose-blue mx-auto mt-6 text-gray-500 dark:text-slate-300 transition">
                    <p>
                        Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr" target="_blank"
                           rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr</a>.<br/>
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                    <h1>
                        <span
                            className="mt-24 block text-center text-lg font-semibold text-blue-600 dark:text-yellow-500 transition">Haftung
                            f&uuml;r Inhalte</span>
                    </h1>
                    <p>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf
                        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG
                        sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte
                        fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine
                        rechtswidrige T&auml;tigkeit hinweisen.</p>
                    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                        allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist
                        jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei
                        Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                        entfernen.</p>
                    <h1>
                        <span
                            className="mt-24 block text-center text-lg font-semibold text-blue-600 dark:text-yellow-500 transition">Haftung
                            f&uuml;r Links</span>
                    </h1>
                    <p>Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                        Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
                        &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                        oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                        Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige
                        Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                    <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                        Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                    <h1>
                        <span
                            className="mt-24 block text-center text-lg font-semibold text-blue-600 dark:text-yellow-500 transition">Urheberrecht</span>
                    </h1>
                    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                        deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
                        Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen
                        Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
                        f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                    <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                        Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                        gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                        bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
                        wir derartige Inhalte umgehend entfernen.</p>                    <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || 'en', ['common'])),
        },
    };
}
