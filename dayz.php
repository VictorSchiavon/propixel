<?php
    
    // Variáveis da página    
    $__title      = "Host de DayZ no Brasil | HydraHost";
    $__meta_title = "Servidores VPS para Jogos | Datacenter no Brasil";    
    $__meta_description = "A melhor Host de DayZ no Brasil, processadores AMD Ryzen e servidores localizados no Brasil com Proteção Anti DDoS.";
    $__meta_keywords    = "hydrahost,HydraHost.com.br.br,host de mta,host de ragnarok,host de fivem,datacenter no brasil,servidor dedicado br,vps br,hospedagem de site,hospedagem empresa,servidor dedicado no brasil,proteção ddos brasil,hospedagem vps,vps são paulo,vps brasilia,vps new york,vps alemanha,vps singapura,vps gamer,host mta,host de mta,host para mta,mta host,host mta br,host gta sa,proteção ddos para games,provedor de vps,vps br,vps eua,vps ae,vps sg,vps ping baixo,cloud computing,vps para games,vps gamer,vps para trabalho,vps empresa,mysql host,host mysql,hosting br,provider br,HydraHost,HydraHost.com.br.br,Hydra.host,HydraHost.cloud,Hydra host,HydraHost,ecxon,heavyhost,fliphost,widhost,multhosting,host de minecraft brasileiro barato,hospedagem de ragnarok,hospedagem de mta,hospedagem-de-mta,hospedagem-de-ragnarok,hospedagem,hospedagem de fivem,host de mta,host,host de rag,host,empresa de host,hospedagi,hosti,mine,ospedagem de ragnarok,ospedagem de mta,hospedagem de mta,hospedagem de ragnarok,virtus,ospedagem de mta,hospedagem de mta,hospedagem de ragnarok,HydraHost, hospedagem mta ping baixo, hospedagem mta low ping, hospedagem vps ping low, host minecraft low ping, host mine low ping, gamersboard, gamersboard minecraft, gamersboard mine, vps gamer, fivem dedicado br, cloud fivem br,datacenter br, ospedagem gamer,host mta com mods,proteção ddos,vps com proteção ddos,vps no brasil,vps ping br,vps com proteção ddos, fivem host, host de fivem";

  // Page class & id
  $__class  = "vps-page";
  $__id     = "vps-page";

  // Include (init.php) file.
  include 'core/init.php';
        
?>

  <!-- Header -->
  <div class="header text-lg-left text-center">
    <div class="container-fluid">
      <!-- navigator -->
      <div class="navigator d-md-flex align-items-center justify-content-start d-none">
        <!-- title -->
        <div class="title">Servidores</div>
        <!-- item -->
        <a href="vps.php" class="item">VPS Gamer</a>
        <a href="shared-hosting.php" class="item">Semidedicados</a>
        <a href="dedi-servers.php" class="item">Servidores Dedicados</a>
      </div>
    </div>
    <div class="container position-relative">
      <!-- row -->
      <div class="row">
        <!-- col -->
        <div class="col-xl-6 col-lg-8">
          <!-- title-5 -->
          <h5 class="title-5">Servidores VPS</h5>
          <!-- title-1 -->
          <h1 class="title-1">A melhor Host de DayZ no Brasil</h1>
          <!-- para-1 -->
          <p class="para-1 mb-3">Servidores equipados com os hardwares recentes do mercado, Host de DayZ - AMD Ryzen, discos SSD NVMe M.2 M.2, adquira seu teste agora.</p>
          <!-- btn -->
          <button type="button" data-click-type="scroll-to" data-scroll="#se-i" class="btn btn-fill-success shadow-off font-500">Escolha seu plano</button>
        </div>
      </div>
      <!-- hero -->
      <img data-src="https://localhost/assets/images/teste2.png" class="lazy hero img-fluid" alt="Image">
    </div>
  </div>

  <!-- Section I -->
  <div class="se-i py-120 bg-2" id="se-i">
    <div class="container">
      <!-- se-head -->
      <div class="se-head mb-5">
        <h3 class="se-title-1">Hospedagem de DayZ no Brasil</h3>
        <h4 class="se-title-2">PLANOS</h4>
      </div>
      <!-- filter-bar -->
      <div class="filter-bar">
        <!-- row -->
        <div class="row justify-content-center">
          <!-- col -->
          <div class="col-xl-2 col-lg-3 col-md-4 col-6">
            <!-- item -->
            <div class="item active" data-show="amd-ryzen">ESPECIFICAÇÕES</div>
          </div>
        </div>
      </div>

      <!-- responsive-table -->
      <div class="responsive-table filter-amd-ryzen mb-3 show">
        <!-- custom-table -->
        <div class="custom-table">
          <!-- tbody -->
          <div class="tbody">
            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="DataCenter em São Paulo">
                      <img data-src="./assets/images/flags/brazil.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">VPS Gamer - AMD Ryzen 1</div>
                    <div class="des">DataCenter em São Paulo</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">VPS Gamer - AMD Ryzen</div>
                    <div class="des">2vCore 4,1 GHz até 5,0 GHz</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">2GB RAM</div>
                    <div class="des">DDR5</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="DISCO SSD NVMe M.2">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">40 GB SSD NVMe M.2</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="REDE E TRÁFEGO">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">Até 1Gbps</div>
                    <div class="des">Tráfego Ilimitado</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="ANTI-DDOS">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">Anti-DDoS</div>
                    <div class="des">Incluso</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="IPV4 E IPV6">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">1 IPv4 / 1 IPv6</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">R$69,90<span>/Mensal</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="https://financeiro.ryzerhost.com/index.php?rp=/store/vps-gamer/vps-gamer-01" class="btn btn-fill-primary shadow-off btn-sm">Configurar</a>
              </div>
            </div>


            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="DataCenter em São Paulo">
                      <img data-src="./assets/images/flags/brazil.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">VPS Gamer - AMD Ryzen 2</div>
                    <div class="des">DataCenter São Paulo</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">VPS Gamer - AMD Ryzen  </div>
                    <div class="des">3vCore 4,1 GHz até 5,0 GHz</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">4GB RAM</div>
                    <div class="des">DDR5</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">50 GB SSD NVMe M.2</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">Até 1Gbps</div>
                    <div class="des">Tráfego Ilimitado</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="ANTI-DDOS">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">Anti-DDoS</div>
                    <div class="des">Incluso</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">1 IPv4 / 1 IPv6</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">R$119,90<span>/Mensal</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="https://financeiro.ryzerhost.com/index.php?rp=/store/vps-gamer/vps-gamer-02" class="btn btn-fill-primary shadow-off btn-sm">Configurar</a>
              </div>
            </div>


            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="DataCenter em São Paulo">
                      <img data-src="./assets/images/flags/brazil.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">VPS Gamer - AMD Ryzen 3</div>
                    <div class="des">DataCenter em São Paulo</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">VPS Gamer - AMD Ryzen  </div>
                    <div class="des">4vCore 4,1 GHz até 5,0 GHz</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">6GB RAM</div>
                    <div class="des">DDR5</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">60 GB SSD NVMe M.2</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">Até 1Gbps</div>
                    <div class="des">Tráfego Ilimitado</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="ANTI-DDOS">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">Anti-DDoS</div>
                    <div class="des">Incluso</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">1 IPv4 / 1 IPv6</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">R$ 169,90<span>/Mensal</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="https://financeiro.ryzerhost.com/index.php?rp=/store/vps-gamer/vps-gamer-03" class="btn btn-fill-primary shadow-off btn-sm">Configurar</a>
              </div>
            </div>


            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="DataCenter em São Paulo">
                      <img data-src="./assets/images/flags/brazil.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">VPS Gamer - AMD Ryzen 4</div>
                    <div class="des">DataCenter em São Paulo</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">VPS Gamer - AMD Ryzen  </div>
                    <div class="des">6vCore 4,1 GHz até 5,0 GHz</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">8GB RAM</div>
                    <div class="des">DDR5</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">80 GB SSD NVMe M.2</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">Até 1Gbps</div>
                    <div class="des">Tráfego Ilimitado</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="ANTI-DDOS">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">Anti-DDoS</div>
                    <div class="des">Incluso</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">1 IPv4 / 1 IPv6</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">R$ 229,90<span>/Mensal</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="https://financeiro.ryzerhost.com/index.php?rp=/store/vps-gamer/vps-gamer-04" class="btn btn-fill-primary shadow-off btn-sm">Configurar</a>
              </div>
            </div>



            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="DataCenter em São Paulo">
                      <img data-src="./assets/images/flags/brazil.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">VPS Gamer - AMD Ryzen 5</div>
                    <div class="des">DataCenter em São Paulo</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">VPS Gamer - AMD Ryzen  </div>
                    <div class="des">7vCore 4,1 GHz até 5,0 GHz</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">10GB RAM</div>
                    <div class="des">DDR5</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">100 GB SSD NVMe M.2</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">Até 1Gbps</div>
                    <div class="des">Tráfego Ilimitado</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="ANTI-DDOS">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">Anti-DDoS</div>
                    <div class="des">Incluso</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">1 IPv4 / 1 IPv6</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">R$ 279,90<span>/Mensal</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="https://financeiro.ryzerhost.com/index.php?rp=/store/vps-gamer/vps-gamer-05" class="btn btn-fill-primary shadow-off btn-sm">Configurar</a>
              </div>
            </div>


            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="DataCenter em São Paulo">
                      <img data-src="./assets/images/flags/brazil.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">VPS Gamer - AMD Ryzen 6</div>
                    <div class="des">DataCenter em São Paulo</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">VPS Gamer - AMD Ryzen  </div>
                    <div class="des">10vCore 4,1 GHz até 5,0 GHz</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">16GB RAM</div>
                    <div class="des">DDR5</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">120 GB SSD NVMe M.2</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">Até 1Gbps</div>
                    <div class="des">Tráfego Ilimitado</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="ANTI-DDOS">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">Anti-DDoS</div>
                    <div class="des">Incluso</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">1 IPv4 / 1 IPv6</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">R$ 359,90<span>/Mensal</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="https://financeiro.ryzerhost.com/index.php?rp=/store/vps-gamer/vps-gamer-06" class="btn btn-fill-primary shadow-off btn-sm">Configurar</a>
              </div>
            </div>


            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="DataCenter em São Paulo">
                      <img data-src="./assets/images/flags/brazil.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">VPS Gamer - AMD Ryzen 7</div>
                    <div class="des">DataCenter em São Paulo</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">VPS Gamer - AMD Ryzen  </div>
                    <div class="des">12vCore 4,1 GHz até 5,0 GHz</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">20GB RAM</div>
                    <div class="des">DDR5</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">160 GB SSD NVMe M.2</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">Até 1Gbps</div>
                    <div class="des">Tráfego Ilimitado</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="ANTI-DDOS">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">Anti-DDoS</div>
                    <div class="des">Incluso</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">1 IPv4 / 1 IPv6</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">R$ 439,90<span>/Mensal</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="https://financeiro.ryzerhost.com/index.php?rp=/store/vps-gamer/vps-gamer-07" class="btn btn-fill-primary shadow-off btn-sm">Configurar</a>
              </div>
            </div>


            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="DataCenter em São Paulo">
                      <img data-src="./assets/images/flags/brazil.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">VPS Gamer - AMD Ryzen 8</div>
                    <div class="des">DataCenter em São Paulo</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">VPS Gamer - AMD Ryzen  </div>
                    <div class="des">16vCore 4,1 GHz até 5,0 GHz</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">32GB RAM</div>
                    <div class="des">DDR5</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">200 GB SSD NVMe M.2</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">Até 1Gbps</div>
                    <div class="des">Tráfego Ilimitado</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="ANTI-DDOS">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">Anti-DDoS</div>
                    <div class="des">Incluso</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                  <div class="name">1 IPv4 / 1 IPv6</div>
                    <div class="des">Configurável</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">R$ 559,90<span>/Mensal</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="https://financeiro.ryzerhost.com/index.php?rp=/store/vps-gamer/vps-gamer-08" class="btn btn-fill-primary shadow-off btn-sm">Configurar</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- responsive-table -->
      <div class="responsive-table filter-self-managed mb-3">
        <!-- custom-table -->
        <div class="custom-table">
          <!-- tbody -->
          <div class="tbody">
            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/united-states-of-america.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">INTEL GOLD 6402P</div>
                    <div class="des">Middleweight</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">26 Cores @ 2.1 GHz</div>
                    <div class="des">Benchmark 15,390</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">64GB</div>
                    <div class="des">up to 384GB</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">2x 250GB SSD</div>
                    <div class="des">up to 8 disks</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">3Gbps</div>
                    <div class="des">100TB/mo free traffic</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">1</div>
                    <div class="des">up to 3</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">$14.00<span>/mo</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="#" class="btn btn-fill-primary shadow-off btn-sm">Configure</a>
              </div>
            </div>
            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/new-zealand.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/niger.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">INTEL GOLD 8102P</div>
                    <div class="des">Middleweight</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">26 Cores @ 2.1 GHz</div>
                    <div class="des">Benchmark 15,390</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">64GB</div>
                    <div class="des">up to 384GB</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">2x 250GB SSD</div>
                    <div class="des">up to 8 disks</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">3Gbps</div>
                    <div class="des">100TB/mo free traffic</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">1</div>
                    <div class="des">up to 3</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">$16.00<span>/mo</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="#" class="btn btn-fill-primary shadow-off btn-sm">Configure</a>
              </div>
            </div>
            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/niue.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/peru.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">INTEL GOLD 9202P</div>
                    <div class="des">Middleweight</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">26 Cores @ 2.1 GHz</div>
                    <div class="des">Benchmark 15,390</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">64GB</div>
                    <div class="des">up to 384GB</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">2x 250GB SSD</div>
                    <div class="des">up to 8 disks</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">3Gbps</div>
                    <div class="des">100TB/mo free traffic</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">1</div>
                    <div class="des">up to 3</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">$18.00<span>/mo</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="#" class="btn btn-fill-primary shadow-off btn-sm">Configure</a>
              </div>
            </div>
            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/mexico.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/monaco.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">INTEL GOLD 9202P</div>
                    <div class="des">Middleweight</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">26 Cores @ 2.1 GHz</div>
                    <div class="des">Benchmark 15,390</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">64GB</div>
                    <div class="des">up to 384GB</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">2x 250GB SSD</div>
                    <div class="des">up to 8 disks</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">3Gbps</div>
                    <div class="des">100TB/mo free traffic</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">1</div>
                    <div class="des">up to 3</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">$18.00<span>/mo</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="#" class="btn btn-fill-primary shadow-off btn-sm">Configure</a>
              </div>
            </div>
            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/romania.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/russia.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">INTEL GOLD 9202P</div>
                    <div class="des">Middleweight</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">26 Cores @ 2.1 GHz</div>
                    <div class="des">Benchmark 15,390</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">64GB</div>
                    <div class="des">up to 384GB</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">2x 250GB SSD</div>
                    <div class="des">up to 8 disks</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">3Gbps</div>
                    <div class="des">100TB/mo free traffic</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">1</div>
                    <div class="des">up to 3</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">$18.00<span>/mo</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="#" class="btn btn-fill-primary shadow-off btn-sm">Configure</a>
              </div>
            </div>
            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/new-zealand.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">INTEL GOLD 7402P</div>
                    <div class="des">Middleweight</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">26 Cores @ 2.1 GHz</div>
                    <div class="des">Benchmark 15,390</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">64GB</div>
                    <div class="des">up to 384GB</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">2x 250GB SSD</div>
                    <div class="des">up to 8 disks</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">3Gbps</div>
                    <div class="des">100TB/mo free traffic</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">1</div>
                    <div class="des">up to 3</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">$14.00<span>/mo</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="#" class="btn btn-fill-primary shadow-off btn-sm">Configure</a>
              </div>
            </div>
            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/germany.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/canada.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">INTEL GOLD 8102P</div>
                    <div class="des">Middleweight</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">26 Cores @ 2.1 GHz</div>
                    <div class="des">Benchmark 15,390</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">64GB</div>
                    <div class="des">up to 384GB</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">2x 250GB SSD</div>
                    <div class="des">up to 8 disks</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">3Gbps</div>
                    <div class="des">100TB/mo free traffic</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">1</div>
                    <div class="des">up to 3</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">$16.00<span>/mo</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="#" class="btn btn-fill-primary shadow-off btn-sm">Configure</a>
              </div>
            </div>
            <!-- tr -->
            <div class="tr">
              <div class="position-relative">
                <!-- td -->
                <div class="td plan-td d-flex align-items-start">
                  <!-- flags -->
                  <div class="flags">
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/sweden.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                    <div class="flag" data-tooltip="EU-Nord-1:3 in stock">
                      <img data-src="./assets/images/flags/spain.svg" class="lazy flag img-fluid" alt="flag">
                    </div>
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">INTEL GOLD 9202P</div>
                    <div class="des">Middleweight</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td cpu-td">
                  <!-- icon -->
                  <div class="icon" title="CPU">
                    <img data-src="assets/images/icons/cpu.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">26 Cores @ 2.1 GHz</div>
                    <div class="des">Benchmark 15,390</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ram-td">
                  <!-- icon -->
                  <div class="icon" title="RAM">
                    <img data-src="assets/images/icons/ram-memory.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">64GB</div>
                    <div class="des">up to 384GB</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td storage-td" title="Storage">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/hard-disk.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">2x 250GB SSD</div>
                    <div class="des">up to 8 disks</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td bandwidth-td" title="Bandwidth">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/speedometer.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">3Gbps</div>
                    <div class="des">100TB/mo free traffic</div>
                  </div>
                </div>
                <!-- td -->
                <div class="td ip-td" title="Dedicated ID">
                  <!-- icon -->
                  <div class="icon">
                    <img data-src="assets/images/icons/cable.svg" class="lazy img-fluid" alt="icon">
                  </div>
                  <!-- text -->
                  <div class="text">
                    <div class="name">1</div>
                    <div class="des">up to 3</div>
                  </div>
                </div>
              </div>
              <!-- td -->
              <div class="td price-td">
                <!-- icon -->
                <div class="icon" title="Price">
                  <img data-src="assets/images/icons/price-tag.svg" class="lazy img-fluid" alt="icon">
                </div>
                <div class="price">$18.00<span>/mo</span></div>
              </div>
              <!-- td -->
              <div class="td actions-td">
                <a href="#" class="btn btn-fill-primary shadow-off btn-sm">Configure</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- se-footer -->
      <div class="se-footer d-flex align-items-center justify-content-center flex-wrap">
          <!-- line -->
          <div class="line d-flex align-items-center justify-content-start">
            <img data-src="assets/images/icons/check-circle.svg" class="lazy icon img-fluid" alt="Check">
            <span class="text">Processadores AMD Ryzen</span>
          </div>
          <!-- line -->
          <div class="line d-flex align-items-center justify-content-start">
            <img data-src="assets/images/icons/check-circle.svg" class="lazy icon img-fluid" alt="Check">
            <span class="text">Migrações gratuitas</span>
          </div>
          <!-- line -->
          <div class="line d-flex align-items-center justify-content-start">
            <img data-src="assets/images/icons/check-circle.svg" class="lazy icon img-fluid" alt="Check">
            <span class="text">Suporte, todos os dias.</span>
          </div>
        </div>
    </div>
  </div>

<?php
  // FAQs
  include 'templates/faqs.inc.php';
  // Footer
  include 'templates/footer.inc.php';
?>
