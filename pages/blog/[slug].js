import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img from '../../public/assets/blog/man.jpg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { APP_KEY, APP_URL } from '@/public/settings/there_is_nothing_holding_me_back/config'

const blogslug = () => {

    const [blog, setblog] = useState();
    const [slug, setSlug] = useState('');
    useEffect(() => {
        const pathSegments = window.location.pathname.split('/').filter(segment => segment !== '');
        const lastSegment = pathSegments[pathSegments.length - 1];
        setSlug(lastSegment);
    }, []);
    console.log(slug);

    useEffect(() => {


        // fetch(`https://creativeitsols.com/system/public/api/single-blog/the-best-deals-going-live-for-amazons-prime-early-access-sale?key=app_c5nsYNIFAhACMAaKYTNEubEwGwr1y9EIov4H405V`).then(res => res.json()).then(json => {
        fetch(`${APP_URL}api/single-blog/${slug}?key=${APP_KEY}`).then(res => res.json()).then(json => {
            setblog(json);

        }).catch(err => {
        })




    }, [slug]);
    console.log('aa', `${APP_URL}api/single-blog/${slug}?key=${APP_KEY}`);
    return (
        <>
            <section className='py-5 '>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="card single-bloag-card blog-card h-100">
                                <div className="card-header col-md-10 mx-auto">
                                    <Image className='shadow' src={img} fill={true}></Image>
                                </div>
                                <div className="card-body">
                                    <div className="blog-cardtitle text-center mt-4">
                                        {/* {blog.data.slug} */}
                                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                                    </div>
                                    <div className="blog-carddesc mt-5 text-center">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos labore hic pariatur quisquam, accusantium placeat voluptate commodi aperiam autem tenetur sunt, illum fuga sequi dolorem sint nostrum beatae assumenda possimus officia consequatur temporibus doloribus, rerum ab. Voluptas incidunt tenetur minima ducimus rerum harum placeat animi porro a. Incidunt, nihil repellat! Excepturi, sapiente dolorem ducimus perferendis nihil veritatis rem earum voluptatem, natus ipsa neque! Dicta pariatur consequatur odit exercitationem accusantium incidunt non beatae! Possimus suscipit natus dolore repellat debitis, in temporibus soluta veniam incidunt qui consequatur quam dolor mollitia itaque, et sunt magnam quae illo vel necessitatibus accusantium tempore? Vitae ab ipsa laudantium fugiat sit facere distinctio dolor cum impedit, eos ratione aliquid, labore, illum odio quis. Ratione repudiandae ex perferendis dolor maxime magnam quasi deleniti tempora sit quis eos iusto deserunt est dolores quam enim sint, ipsum praesentium libero, quibusdam quas! Molestiae placeat dolorem fugiat? Rerum voluptatibus enim sequi ut, dignissimos eum illo quos ab asperiores beatae quibusdam nesciunt, placeat perspiciatis? Exercitationem alias repellat repellendus qui eveniet quis placeat aspernatur consequatur ea vel itaque ullam animi, necessitatibus facilis ex veniam, nesciunt deserunt blanditiis labore sequi soluta, sapiente rerum consectetur! Harum enim temporibus voluptatum iste dicta nihil praesentium repellendus, aspernatur quas nulla accusantium molestiae rerum asperiores natus ad inventore officiis nam! Repudiandae cum hic dicta quis ad molestias aspernatur laudantium? Architecto voluptate soluta nisi, officiis animi, eius id sit eos delectus sunt repudiandae corrupti odit exercitationem dolores numquam quisquam quia mollitia. Voluptatibus tempora ipsum illum animi quis, consectetur, voluptates rem voluptate dolores repellendus esse, doloremque repellat aut magnam perferendis cupiditate aspernatur magni facere suscipit dignissimos qui expedita minima fugit. Aliquam alias mollitia ex accusantium reprehenderit consectetur saepe, tempora quos odio ipsa! Laudantium adipisci non beatae minima, ipsum voluptas similique quia vel iure magni. Expedita debitis cumque perspiciatis vero totam? Magni, voluptates quas. Possimus quia culpa in perferendis dolores optio nihil officia, rerum consequatur, dignissimos voluptatum aspernatur libero error eius est tempora aut voluptas qui quam laudantium. Repellendus placeat earum illo eaque laudantium libero deleniti quod dolore! Eum eligendi nulla voluptatem quam blanditiis sint harum quas in itaque deleniti voluptatum debitis praesentium explicabo quaerat, consequuntur beatae quia ad nobis tenetur nisi nostrum! Quas, alias. Cupiditate harum sint assumenda, dolor recusandae, sunt eius reprehenderit temporibus itaque provident nihil ullam! Pariatur itaque autem ullam obcaecati. Pariatur libero temporibus molestias, soluta sapiente laudantium molestiae, laboriosam mollitia saepe dolor deleniti! Quam, magni. Sapiente odio esse magnam corrupti itaque, est cum, obcaecati unde, provident deleniti dolorem doloribus eaque voluptate! Tenetur aperiam itaque labore repellat, nostrum et officia temporibus, iure eligendi cupiditate voluptatum unde porro, quasi fugit excepturi! Nesciunt commodi aliquid minus saepe aut iusto nobis magnam. Quis in corrupti ipsum sint nulla dolorem eius, enim dolorum corporis incidunt voluptatum nobis explicabo nihil quos sequi qui libero officia tempora ipsam. Labore saepe eaque dolor aperiam sed laboriosam asperiores, quis incidunt veritatis at voluptatem itaque alias minus fugiat distinctio reprehenderit. Repellat nobis possimus tempore at natus quibusdam tenetur harum alias maxime expedita eius hic dolorem incidunt, rerum, soluta iure, unde dolor deleniti veritatis enim quae! Ducimus dolorum vitae rerum sunt, quam quis ad expedita nobis cum doloribus earum facere officiis itaque possimus tenetur sapiente! Culpa beatae magnam neque optio officia odio nemo dolorum quaerat. Veritatis voluptatibus voluptate inventore debitis et. Accusamus debitis aliquid facilis, sequi eius nisi id molestias ut ullam accusantium! Nisi dignissimos expedita enim illo maiores nobis, laboriosam optio excepturi neque obcaecati. Laborum porro ipsum expedita dolores. Culpa, adipisci earum ipsum asperiores accusamus nulla nihil eos accusantium unde? Voluptatibus iure deleniti minima nesciunt, veniam est, modi delectus officiis magnam animi quas culpa reiciendis iste quibusdam neque a, dolorem assumenda recusandae molestiae porro nulla labore aliquam nostrum optio! Consequuntur fuga, dolor sed velit accusantium exercitationem sapiente. Culpa illo possimus rem, inventore fugit, quis quas provident fugiat aliquid velit qui accusamus dicta tempora itaque officiis similique perspiciatis est! Numquam nemo voluptatibus consectetur ipsa amet corrupti officiis quaerat, nihil quae explicabo aperiam quia, nostrum mollitia eum, repudiandae voluptates facere repellat sint quod fugit labore eligendi! Animi numquam mollitia fugit optio quos amet nulla! Quisquam ad delectus nemo incidunt et ut necessitatibus nulla alias earum iste commodi nostrum dicta fuga reprehenderit, assumenda maxime quidem adipisci optio. Animi necessitatibus dolore possimus quod earum quidem optio, esse ad velit sit praesentium! Voluptate optio quam dolore fuga iste fugit alias illo aut maiores porro similique enim obcaecati explicabo dignissimos odit nam quibusdam libero placeat, nisi quo incidunt animi natus vitae quos. Vero doloribus excepturi tenetur esse id facere perferendis voluptatibus eligendi aut maxime temporibus, aperiam veniam sunt praesentium libero ea distinctio. Soluta maxime minus quas deserunt tenetur rerum molestias odit incidunt praesentium tempora, eligendi, ipsum delectus asperiores architecto enim, reprehenderit itaque perspiciatis fugiat deleniti error iure expedita? Esse quo, assumenda labore repellat explicabo cumque recusandae culpa sapiente fugit sunt! Voluptatum quisquam asperiores saepe molestiae provident ratione iste qui pariatur corporis debitis ipsa repellendus alias repellat accusamus, eligendi veniam tempore maxime. Maxime repellendus qui pariatur in sapiente, architecto cum totam atque tempore aliquid fugiat aperiam voluptate accusamus, possimus sed quisquam laboriosam vel reprehenderit labore consectetur mollitia? Numquam commodi voluptate aperiam a harum ipsum, nesciunt sit rerum eum culpa atque iure perferendis? Odio sequi quis consequatur obcaecati est at, ut non debitis a, tenetur asperiores iure commodi sunt placeat laudantium dolor reprehenderit quaerat, mollitia corrupti ipsa voluptates repellat fugit? Repudiandae nulla eum natus nostrum impedit quod nisi debitis! Voluptate, voluptatibus officia voluptas quas adipisci, quibusdam ullam quidem consectetur modi veniam maxime! Accusantium aliquid, blanditiis soluta recusandae praesentium porro doloremque excepturi repellat fuga, magni doloribus perspiciatis delectus quae dolores sit voluptas, laudantium velit reiciendis quas ad odio nemo aut numquam. Non id officiis amet ex a saepe. Voluptate, sed excepturi maxime autem harum facilis accusamus id sequi repudiandae, praesentium vel exercitationem. Expedita modi hic atque labore ut ratione nostrum quae natus eos dolor delectus incidunt, tempora magni minus consequatur ea sit voluptate voluptates adipisci cupiditate. Excepturi omnis cumque explicabo dolorem earum, minus aliquam, ipsam mollitia distinctio reprehenderit vitae. Doloribus harum rem mollitia, voluptates praesentium saepe dicta?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default blogslug