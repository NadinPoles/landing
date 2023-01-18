import React, { useState } from "react";
import { GalleryList } from "../../definition";
import Fancybox from "../Fancybox/Fancybox";
const galleryPerRow = 8;

const Gallery = () => {
  const [next, setNext] = useState(galleryPerRow);
  const handleMoreGallery = () => {
    setNext(next + galleryPerRow);
  };
  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section_text">
          <h2>ФОТОГАЛЕРЕЯ</h2>
          <p>Ресторан сделан в виде традиционной помещичьей усадьбы</p>
        </div>
        <Fancybox>
          <div className="row">
            {GalleryList?.slice(0, next)?.map(
              (gallery: any) =>
                gallery.image && (
                  <div
                    className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"
                    key={gallery.id}
                  >
                    <div className="gallery_block text-center">
                      <a
                        className="fancybox_img"
                        data-fancybox="gallery"
                        href={`/images/${gallery.image}`}
                      >
                        <img
                          src={`/images/${gallery.image}`}
                          alt="Фотогалерея"
                        />
                      </a>
                    </div>
                  </div>
                )
            )}
          </div>
        </Fancybox>
        {next < GalleryList?.length && (
          <button className="morebtn" onClick={handleMoreGallery}>
            Показать еще
          </button>
        )}
      </div>
    </section>
  );
};

export default Gallery;
