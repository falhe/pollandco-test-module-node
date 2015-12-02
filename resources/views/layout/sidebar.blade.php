{{-- <div>My sidebar section here</div> --}}

{{--<div class="col-lg-3 sidebar" > --}}
    <ul class="nav og nav-stacked" id="sidebar">
        <li class="tp">Suivi panéliste & Dashboard </li>
        <li class="@if ($currentPage)active @endif">
            <a href="{{ url('/admin/rechercherusers') }}">Recherche de panéliste</a>
        </li>
        <li>
            <a href="{{ url('/admin/gestionpoints') }}">Gestion des points</a>
        </li>

        <li class="tp">Plus</li>
        <li>
            <a href="../docs/index.html">
                Toolkit docs
            </a>
        </li>
        <li>
            <a href="http://getbootstrap.com" target="blank">
                Bootstrap docs
            </a>
        </li>
        <li>
            <a href="../light/index.html">Light UI</a>
        </li>
    </ul>
{{-- </div> --}}