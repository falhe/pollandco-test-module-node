@extends('app')

@section('content')

    <?php

        $arrayMonths = array(1 => 'Jan.', 2 => 'Feb.', 3 => 'Mar.', 4 => 'Apr.', 5 => 'May', 6 => 'Jun.', 7 => 'Jul.', 8 => 'Aug.', 9 => 'Sep.', 10 => 'Oct.', 11 => 'Nov.', 12 => 'Dec.');

        $arrayDay = ['1' => '1','2' => '2','3' => '3','4' => '4','5' => '5','6' => '6','7' => '7','8' => '8','9' => '9','10' => '10','11' => '11','12' => '12','13' => '13','14' => '14','15' => '15','16' => '16','17' => '17','18' => '18','19' => '19','20' => '20','21' => '21','22' => '22','23' => '23','24' => '24','25' => '25','26' => '26','27' => '27','28' => '28','29' => '29','30' => '30','31' => '31',];

        $arrayYear = ['2014'=>'2014', '2015'=>'2015'];
     ?>

    <div class="panel panel-default">
        <div class="panel-heading">Register</div>
        <div class="panel-body">

            {!! Form::open(['class' => 'form-horizontal' ]) !!}

            <div class="form-group">
                <label class="col-md-4 control-label">Nom d'utilisateur</label>
                <div class="col-md-6">
                    {!! Form::text('name', null, ['class' => 'form-control']) !!}
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">E-Mail</label>

                <div class="col-md-6">
                    {!! Form::email('email', null, ['class' => 'form-control']) !!}
                </div>
            </div>


            <div class="form-group">
                <label class="col-md-4 control-label">Genre</label>

                <div class="col-md-2">
                    <label class="control-label">Homme</label>
                    {!! Form::radio('gender', '0') !!}
                </div>
                <div class="col-md-2">
                    <label class="control-label">Femme</label>
                    {!! Form::radio('gender', '1') !!}
                </div>
            </div>

             <div class="form-group">
                <label class="col-md-4 control-label">Date de naissance</label>

                <div class="">
                    <div class="col-md-1">
                        {!! Form::select('day', $arrayDay , 'jour', ['class' => 'form-control']) !!}
                    </div>
                </div>

                <div class="">
                    <div class="col-md-1">
                        {!! Form::select('month', $arrayMonths , 'mois', ['class' => 'form-control']) !!}
                    </div>
                </div>

                <div class="">
                    <div class="col-md-1">
                        {!! Form::select('year', $arrayYear , 'année', ['class' => 'form-control']) !!}
                    </div>
                </div>

            </div>


            <div class="form-group">
                <label class="col-md-4 control-label">Mot de passe</label>

                <div class="col-md-6">
                    {!! Form::password('password', ['class' => 'form-control']) !!}
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-4 control-label">Confirmer le mot de passe</label>

                <div class="col-md-6">
                    {!! Form::password('password_confirmation', ['class' => 'form-control']) !!}
                </div>
            </div>

            {!! Form::hidden('role_id', '1' ) !!}

            <div class="form-group">
                <div class="col-md-6 col-md-offset-4">
                    <button type="submit" class="btn btn-primary">
                        S'inscrire
                    </button>
                </div>
            </div>
            {!! Form::close() !!}
        </div>
    </div>
@endsection
