@extends('templates.master')

@section('css-view')
@endsection

@section('js-view')    

@endsection

@section('conteudo-view')

    @include('sections.apresentacao')
    @include('sections.sobre')
    @include('sections.trabalhos')
    @include('sections.resume')
    @include('sections.portfolio')
    @include('sections.contagem')
    @include('sections.contato')

@endsection