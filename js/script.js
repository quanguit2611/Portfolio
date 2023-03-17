/*
 typing animation 
var typed = new Typed(".typing", {
    strings:["","Web Designer","Graphic Designer","Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
*/

/* aside */
const nav = document.querySelector(".nav"),
      navList = document.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      
      /* hiện section tương ứng bên menu*/ 
      for(let i=0; i<totalNavList; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
          removeBackSection();
          for(let j=0; j<totalNavList; j++)
          {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
              addBackSection(j);
              //allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
          }
          this.classList.add("active");
          showSection(this);
          if(window.innerWidth<1200)
          {
            asideSectionTogglerBtn();
          }
        })
      }

      /* bỏ đánh dấu trang trước đó*/
      function removeBackSection()
      {
        for(let i=0; i<totalSection; i++)
        {
          allSection[i].classList.remove("back-section");
        }
      }

      /* đánh dấu trang trước đó*/ 
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }

      /* hiện trang hiện tại */
      function showSection(element)
      {
        for(let i=0; i<totalSection; i++)
        {
          allSection[i].classList.remove("active");
        }   
        const target = element.getAttribute("href").split("#")[1]; /* lấy biến target là tên của attribute href*/
        document.querySelector("#" + target).classList.add("active")
      }

      function updateNav(element)
      {
        for(let i=0; i<totalNavList; i++)
        {
          navList[i].querySelector("a").classList.remove("active");
          const target = element.getAttribute("href").split("#")[1]; /* lấy biến target là tên của attribute href*/
          if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
          {
            navList[i].querySelector("a").classList.add("active");
          }
        }
      }

      /* chuyển trang khi nhấn hire me ở phần about */ 
      document.querySelector(".hire-me").addEventListener("click", function()
      {
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
      })

      /* tạo button để hiện menu khi màn hình bị thu nhỏ (responsive) */ 
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => {
              asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
              aside.classList.toggle("open");
              navTogglerBtn.classList.toggle("open");
              for(let i=0; i<totalSection; i++)
              {
                allSection[i].classList.toggle("open");
              }
            }