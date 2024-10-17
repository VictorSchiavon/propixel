<?php
    
  // Variáveis da página    
  $__title      = "Página de Erro 404 - HydraHost.com.br";
  $__meta_description = "Esta é a página de resposta 404 da HydraHost.";

  // Classe e ID da página
  $__class  = "pagina-404";
  $__id     = "pagina-404";

  // Incluir arquivo (init.php).
  include 'core/init.php';
        
?>

  <!-- Seção -->
  <div class="section">
    <div class="container-fluid">
      <!-- conteúdo -->
      <div class="content">
        <!-- linha -->
        <div class="row justify-content-center align-items-center">
          <!-- coluna -->
          <div class="col-12 text-center mb-2">
            <!-- hero -->
            <img data-src="assets/images/pages/404/404.svg" class="lazy hero img-fluid" alt="Imagem">
          </div>
          <!-- coluna -->
          <div class="col-12 text-center">
            <!-- título-1 -->
            <h1 class="title-1">Parece que você encontrou o<br>portal para o grande nada.</h1>
            <!-- parágrafo-1 -->
            <p class="para-1 mb-4">Você tentou acessar uma página que não está em nosso servidor.</p>
            <!-- links -->
            <div class="links d-flex align-items-center justify-content-center flex-wrap">
              <a href="/" class="link">Início</a>
              <a href="" class="link">Central de Ajuda</a>
              <a href="#" class="link">Login</a>
              <a href="#" class="link">Base de Conhecimento</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<?php
  // Rodapé
  include 'templates/footer.inc.php';
?>
