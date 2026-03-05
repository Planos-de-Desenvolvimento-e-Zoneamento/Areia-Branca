ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-37.067325, -4.834434, -37.019127, -4.804822]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Equipamentos_1 = new ol.format.GeoJSON();
var features_Equipamentos_1 = format_Equipamentos_1.readFeatures(json_Equipamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Equipamentos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipamentos_1.addFeatures(features_Equipamentos_1);
var lyr_Equipamentos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Equipamentos_1, 
                style: style_Equipamentos_1,
                popuplayertitle: 'Equipamentos ',
                interactive: true,
                title: '<img src="styles/legend/Equipamentos_1.png" /> Equipamentos '
            });
var format_ServiosdeApoio_2 = new ol.format.GeoJSON();
var features_ServiosdeApoio_2 = format_ServiosdeApoio_2.readFeatures(json_ServiosdeApoio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ServiosdeApoio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiosdeApoio_2.addFeatures(features_ServiosdeApoio_2);
cluster_ServiosdeApoio_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ServiosdeApoio_2
});
var lyr_ServiosdeApoio_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ServiosdeApoio_2, 
                style: style_ServiosdeApoio_2,
                popuplayertitle: 'Serviços de Apoio',
                interactive: true,
                title: '<img src="styles/legend/ServiosdeApoio_2.png" /> Serviços de Apoio'
            });
var format_Fundeadouros_3 = new ol.format.GeoJSON();
var features_Fundeadouros_3 = format_Fundeadouros_3.readFeatures(json_Fundeadouros_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Fundeadouros_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fundeadouros_3.addFeatures(features_Fundeadouros_3);
var lyr_Fundeadouros_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fundeadouros_3, 
                style: style_Fundeadouros_3,
                popuplayertitle: 'Fundeadouros ',
                interactive: true,
                title: '<img src="styles/legend/Fundeadouros_3.png" /> Fundeadouros '
            });
var format_BaciadeEvoluo_4 = new ol.format.GeoJSON();
var features_BaciadeEvoluo_4 = format_BaciadeEvoluo_4.readFeatures(json_BaciadeEvoluo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciadeEvoluo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciadeEvoluo_4.addFeatures(features_BaciadeEvoluo_4);
var lyr_BaciadeEvoluo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciadeEvoluo_4, 
                style: style_BaciadeEvoluo_4,
                popuplayertitle: 'Bacia de Evolução ',
                interactive: true,
                title: '<img src="styles/legend/BaciadeEvoluo_4.png" /> Bacia de Evolução '
            });
var format_CanaldeAcesso_5 = new ol.format.GeoJSON();
var features_CanaldeAcesso_5 = format_CanaldeAcesso_5.readFeatures(json_CanaldeAcesso_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaldeAcesso_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaldeAcesso_5.addFeatures(features_CanaldeAcesso_5);
var lyr_CanaldeAcesso_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaldeAcesso_5, 
                style: style_CanaldeAcesso_5,
                popuplayertitle: 'Canal de Acesso',
                interactive: true,
                title: '<img src="styles/legend/CanaldeAcesso_5.png" /> Canal de Acesso'
            });
var format_AcessosRodovirios_6 = new ol.format.GeoJSON();
var features_AcessosRodovirios_6 = format_AcessosRodovirios_6.readFeatures(json_AcessosRodovirios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodovirios_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodovirios_6.addFeatures(features_AcessosRodovirios_6);
var lyr_AcessosRodovirios_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodovirios_6, 
                style: style_AcessosRodovirios_6,
                popuplayertitle: 'Acessos Rodoviários',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodovirios_6.png" /> Acessos Rodoviários'
            });
var format_InstalaesNoOperacionais_7 = new ol.format.GeoJSON();
var features_InstalaesNoOperacionais_7 = format_InstalaesNoOperacionais_7.readFeatures(json_InstalaesNoOperacionais_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_InstalaesNoOperacionais_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesNoOperacionais_7.addFeatures(features_InstalaesNoOperacionais_7);
var lyr_InstalaesNoOperacionais_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesNoOperacionais_7, 
                style: style_InstalaesNoOperacionais_7,
                popuplayertitle: 'Instalações Não Operacionais ',
                interactive: true,
                title: '<img src="styles/legend/InstalaesNoOperacionais_7.png" /> Instalações Não Operacionais '
            });
var format_Acostagem_8 = new ol.format.GeoJSON();
var features_Acostagem_8 = format_Acostagem_8.readFeatures(json_Acostagem_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Acostagem_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acostagem_8.addFeatures(features_Acostagem_8);
var lyr_Acostagem_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acostagem_8, 
                style: style_Acostagem_8,
                popuplayertitle: 'Acostagem ',
                interactive: true,
                title: '<img src="styles/legend/Acostagem_8.png" /> Acostagem '
            });
var format_Armazenagem_9 = new ol.format.GeoJSON();
var features_Armazenagem_9 = format_Armazenagem_9.readFeatures(json_Armazenagem_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Armazenagem_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Armazenagem_9.addFeatures(features_Armazenagem_9);
var lyr_Armazenagem_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Armazenagem_9, 
                style: style_Armazenagem_9,
                popuplayertitle: 'Armazenagem ',
                interactive: true,
                title: '<img src="styles/legend/Armazenagem_9.png" /> Armazenagem '
            });
var format_reaseInstalaesAlfandegadasdoPorto_10 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadasdoPorto_10 = format_reaseInstalaesAlfandegadasdoPorto_10.readFeatures(json_reaseInstalaesAlfandegadasdoPorto_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadasdoPorto_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadasdoPorto_10.addFeatures(features_reaseInstalaesAlfandegadasdoPorto_10);
var lyr_reaseInstalaesAlfandegadasdoPorto_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadasdoPorto_10, 
                style: style_reaseInstalaesAlfandegadasdoPorto_10,
                popuplayertitle: 'Áreas e Instalações Alfandegadas do Porto',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadasdoPorto_10.png" /> Áreas e Instalações Alfandegadas do Porto'
            });
var format_reasArrendveisLongoPrazo_11 = new ol.format.GeoJSON();
var features_reasArrendveisLongoPrazo_11 = format_reasArrendveisLongoPrazo_11.readFeatures(json_reasArrendveisLongoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisLongoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisLongoPrazo_11.addFeatures(features_reasArrendveisLongoPrazo_11);
var lyr_reasArrendveisLongoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisLongoPrazo_11, 
                style: style_reasArrendveisLongoPrazo_11,
                popuplayertitle: 'Áreas Arrendáveis - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisLongoPrazo_11.png" /> Áreas Arrendáveis - Longo Prazo'
            });
var format_reasArrendveisMdioPrazo_12 = new ol.format.GeoJSON();
var features_reasArrendveisMdioPrazo_12 = format_reasArrendveisMdioPrazo_12.readFeatures(json_reasArrendveisMdioPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisMdioPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisMdioPrazo_12.addFeatures(features_reasArrendveisMdioPrazo_12);
var lyr_reasArrendveisMdioPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisMdioPrazo_12, 
                style: style_reasArrendveisMdioPrazo_12,
                popuplayertitle: 'Áreas Arrendáveis - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisMdioPrazo_12.png" /> Áreas Arrendáveis - Médio Prazo'
            });
var format_reasArrendveisCurtoPrazo_13 = new ol.format.GeoJSON();
var features_reasArrendveisCurtoPrazo_13 = format_reasArrendveisCurtoPrazo_13.readFeatures(json_reasArrendveisCurtoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasArrendveisCurtoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveisCurtoPrazo_13.addFeatures(features_reasArrendveisCurtoPrazo_13);
var lyr_reasArrendveisCurtoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveisCurtoPrazo_13, 
                style: style_reasArrendveisCurtoPrazo_13,
                popuplayertitle: 'Áreas Arrendáveis - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveisCurtoPrazo_13.png" /> Áreas Arrendáveis - Curto Prazo'
            });
var format_Zoneamento_14 = new ol.format.GeoJSON();
var features_Zoneamento_14 = format_Zoneamento_14.readFeatures(json_Zoneamento_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Zoneamento_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneamento_14.addFeatures(features_Zoneamento_14);
var lyr_Zoneamento_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneamento_14, 
                style: style_Zoneamento_14,
                popuplayertitle: 'Zoneamento',
                interactive: true,
                title: '<img src="styles/legend/Zoneamento_14.png" /> Zoneamento'
            });
var format_PoligonaldareadoPortoOrganizadodeAreiaBranca_15 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeAreiaBranca_15 = format_PoligonaldareadoPortoOrganizadodeAreiaBranca_15.readFeatures(json_PoligonaldareadoPortoOrganizadodeAreiaBranca_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeAreiaBranca_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeAreiaBranca_15.addFeatures(features_PoligonaldareadoPortoOrganizadodeAreiaBranca_15);
var lyr_PoligonaldareadoPortoOrganizadodeAreiaBranca_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeAreiaBranca_15, 
                style: style_PoligonaldareadoPortoOrganizadodeAreiaBranca_15,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Areia Branca',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeAreiaBranca_15.png" /> Poligonal da Área do Porto Organizado de Areia Branca'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeAreiaBranca_15,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado'});
var group_Zoneamento = new ol.layer.Group({
                                layers: [lyr_Zoneamento_14,],
                                fold: 'open',
                                title: 'Zoneamento'});
var group_reasArrendveis = new ol.layer.Group({
                                layers: [lyr_reasArrendveisLongoPrazo_11,lyr_reasArrendveisMdioPrazo_12,lyr_reasArrendveisCurtoPrazo_13,],
                                fold: 'open',
                                title: 'Áreas Arrendáveis '});
var group_reaseInstalaesAlfandegadasdoPorto = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadasdoPorto_10,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas do Porto'});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_Armazenagem_9,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_Acostagem_8,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_InstalaesNoOperacionais = new ol.layer.Group({
                                layers: [lyr_InstalaesNoOperacionais_7,],
                                fold: 'open',
                                title: 'Instalações Não Operacionais '});
var group_AcessosRodovirios = new ol.layer.Group({
                                layers: [lyr_AcessosRodovirios_6,],
                                fold: 'open',
                                title: 'Acessos Rodoviários'});
var group_CanaldeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaldeAcesso_5,],
                                fold: 'open',
                                title: 'Canal de Acesso'});
var group_BaciadeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciadeEvoluo_4,],
                                fold: 'open',
                                title: 'Bacia de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_Fundeadouros_3,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_ServiosdeApoio = new ol.layer.Group({
                                layers: [lyr_ServiosdeApoio_2,],
                                fold: 'open',
                                title: 'Serviços de Apoio '});
var group_Equipamentos = new ol.layer.Group({
                                layers: [lyr_Equipamentos_1,],
                                fold: 'open',
                                title: 'Equipamentos '});

lyr_GoogleSatellite_0.setVisible(true);lyr_Equipamentos_1.setVisible(false);lyr_ServiosdeApoio_2.setVisible(false);lyr_Fundeadouros_3.setVisible(false);lyr_BaciadeEvoluo_4.setVisible(false);lyr_CanaldeAcesso_5.setVisible(false);lyr_AcessosRodovirios_6.setVisible(false);lyr_InstalaesNoOperacionais_7.setVisible(false);lyr_Acostagem_8.setVisible(false);lyr_Armazenagem_9.setVisible(false);lyr_reaseInstalaesAlfandegadasdoPorto_10.setVisible(false);lyr_reasArrendveisLongoPrazo_11.setVisible(false);lyr_reasArrendveisMdioPrazo_12.setVisible(false);lyr_reasArrendveisCurtoPrazo_13.setVisible(false);lyr_Zoneamento_14.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeAreiaBranca_15.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Equipamentos,group_ServiosdeApoio,group_Fundeadouros,group_BaciadeEvoluo,group_CanaldeAcesso,group_AcessosRodovirios,group_InstalaesNoOperacionais,group_Acostagem,group_Armazenagem,group_reaseInstalaesAlfandegadasdoPorto,group_reasArrendveis,group_Zoneamento,group_PoligonaldareadoPortoOrganizado];
lyr_Equipamentos_1.set('fieldAliases', {'Tipo_de_eq': 'Tipo de Equipamento', 'Finalidade': 'Finalidade do Equipamento ', 'Operador_d': 'Operador do Equipamento ', 'Capacidade': 'Capacidade do Equipamento (t) ', 'Data_de_fa': 'Data de Fabricação ', 'Tempo_de_u': 'Tempo de Uso (anos) ', });
lyr_ServiosdeApoio_2.set('fieldAliases', {'Serviço_o': 'Serviço Oferecido ', 'Empresa_fo': 'Empresa Fornecedora ', 'Capacidade': 'Capacidade', });
lyr_Fundeadouros_3.set('fieldAliases', {'Fundeadour': 'Fundeadouro', 'Quantidade': 'Quantidade', 'Localizaç': 'Localização', 'Diâmetro': 'Diâmetro', 'Profundi_1': 'Profundidade (m)', 'Compriment': 'Comprimento (m) ', 'Largura__m': 'Largura (m) ', });
lyr_BaciadeEvoluo_4.set('fieldAliases', {'Quantidade': 'Quantidade', 'Diamentro': 'Diâmetro (m) ', 'Localizaç': 'Localização ', 'Profundi_1': 'Profundidade (m) ', 'Comprime_1': 'Comprimento (m) ', 'Largura__m': 'Largura (m) ', });
lyr_CanaldeAcesso_5.set('fieldAliases', {'Canal_de_a': 'Trecho ', 'Profundi_1': 'Profundidade (m) ', 'Comprime_1': 'Comprimento (m) ', 'Largura__m': 'Largura (m) ', 'Diametro__': 'Diâmetro (m) ', });
lyr_AcessosRodovirios_6.set('fieldAliases', {'Rotas': 'Nome', 'Sigla': 'Sigla', 'Jurisdiç': 'Jurisdição ', 'Unidade_da': 'Unidade de Federação ', 'PNV': 'PNV (plano nacional da viação) ', 'Extensão': 'Extensão (Km) ', 'Classifica': 'Classificação ', 'Concessão': 'Concessão', 'Município': 'Município', 'VMD_Diári': 'VMD Diário ', });
lyr_InstalaesNoOperacionais_7.set('fieldAliases', {'Predio': 'Tipo de Instalação ', 'Uso_da_Ins': 'Uso da Instalação ', 'Regime_de': 'Regime de Exploração', 'Just': 'Justificativa ', 'Area__m²_': 'Área (m²) ', });
lyr_Acostagem_8.set('fieldAliases', {'Acostagens': 'Identificador do Berço ', 'Estado': 'Estado de Conservação', 'Carac': 'Características Construtivas ', 'Principais': 'Principais Produtos ', 'Comprime_1': 'Comprimento (m) ', 'Profundi_1': 'Profundidade (m) ', });
lyr_Armazenagem_9.set('fieldAliases', {'CODERN': 'Tipo da Instalação', 'Capacidade': 'Capacidade (t) ', 'Regime_de': 'Regime de Exploração ', 'Area__m²_': 'Área (m²) ', 'Volume__m': 'Volume (m³) ', });
lyr_reaseInstalaesAlfandegadasdoPorto_10.set('fieldAliases', {'CODERN': 'Nome ', 'Companhia': 'Companhia', 'Tipo_de_Pr': 'Tipo de Produto ', 'Ins': 'Instrumento Legal ', 'Area__m²_': 'Área (m²) ', });
lyr_reasArrendveisLongoPrazo_11.set('fieldAliases', {'Nome_da_Ar': 'Nome da Área ', 'Area__m²_': 'Área (m²) ', 'Uso': 'Uso', });
lyr_reasArrendveisMdioPrazo_12.set('fieldAliases', {'Nome_da_Ar': 'Nome da Área ', 'Area__m²_': 'Área (m²) ', 'Uso': 'Uso', });
lyr_reasArrendveisCurtoPrazo_13.set('fieldAliases', {'Nome_da_Ar': 'Nome da Área ', 'Area__m²_': 'Área (m²) ', 'Uso': 'Uso', });
lyr_Zoneamento_14.set('fieldAliases', {'Operador': 'Operador', 'Categoria': 'Categoria', 'Area__m_': 'Área (m²) ', });
lyr_PoligonaldareadoPortoOrganizadodeAreiaBranca_15.set('fieldAliases', {'Nome': 'Nome', 'Instrument': 'Instrumento Legal ', 'Tipo': 'Tipo', 'Area__m²_': 'Área (m²) ', });
lyr_Equipamentos_1.set('fieldImages', {'Tipo_de_eq': 'TextEdit', 'Finalidade': 'TextEdit', 'Operador_d': 'TextEdit', 'Capacidade': 'TextEdit', 'Data_de_fa': 'TextEdit', 'Tempo_de_u': 'TextEdit', });
lyr_ServiosdeApoio_2.set('fieldImages', {'Serviço_o': 'TextEdit', 'Empresa_fo': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_Fundeadouros_3.set('fieldImages', {'Fundeadour': 'TextEdit', 'Quantidade': 'TextEdit', 'Localizaç': 'TextEdit', 'Diâmetro': 'TextEdit', 'Profundi_1': 'TextEdit', 'Compriment': 'TextEdit', 'Largura__m': 'TextEdit', });
lyr_BaciadeEvoluo_4.set('fieldImages', {'Quantidade': 'TextEdit', 'Diamentro': 'TextEdit', 'Localizaç': 'TextEdit', 'Profundi_1': 'TextEdit', 'Comprime_1': 'TextEdit', 'Largura__m': 'TextEdit', });
lyr_CanaldeAcesso_5.set('fieldImages', {'Canal_de_a': 'TextEdit', 'Profundi_1': 'TextEdit', 'Comprime_1': 'TextEdit', 'Largura__m': 'TextEdit', 'Diametro__': 'TextEdit', });
lyr_AcessosRodovirios_6.set('fieldImages', {'Rotas': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisdiç': 'TextEdit', 'Unidade_da': 'TextEdit', 'PNV': 'TextEdit', 'Extensão': 'TextEdit', 'Classifica': 'TextEdit', 'Concessão': 'TextEdit', 'Município': 'TextEdit', 'VMD_Diári': 'TextEdit', });
lyr_InstalaesNoOperacionais_7.set('fieldImages', {'Predio': 'TextEdit', 'Uso_da_Ins': 'TextEdit', 'Regime_de': 'TextEdit', 'Just': 'TextEdit', 'Area__m²_': 'TextEdit', });
lyr_Acostagem_8.set('fieldImages', {'Acostagens': 'TextEdit', 'Estado': 'TextEdit', 'Carac': 'TextEdit', 'Principais': 'TextEdit', 'Comprime_1': 'TextEdit', 'Profundi_1': 'TextEdit', });
lyr_Armazenagem_9.set('fieldImages', {'CODERN': 'TextEdit', 'Capacidade': 'TextEdit', 'Regime_de': 'TextEdit', 'Area__m²_': 'TextEdit', 'Volume__m': 'TextEdit', });
lyr_reaseInstalaesAlfandegadasdoPorto_10.set('fieldImages', {'CODERN': 'TextEdit', 'Companhia': 'TextEdit', 'Tipo_de_Pr': 'TextEdit', 'Ins': 'TextEdit', 'Area__m²_': 'TextEdit', });
lyr_reasArrendveisLongoPrazo_11.set('fieldImages', {'Nome_da_Ar': 'TextEdit', 'Area__m²_': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendveisMdioPrazo_12.set('fieldImages', {'Nome_da_Ar': 'TextEdit', 'Area__m²_': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendveisCurtoPrazo_13.set('fieldImages', {'Nome_da_Ar': 'TextEdit', 'Area__m²_': 'TextEdit', 'Uso': 'TextEdit', });
lyr_Zoneamento_14.set('fieldImages', {'Operador': 'TextEdit', 'Categoria': 'TextEdit', 'Area__m_': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeAreiaBranca_15.set('fieldImages', {'Nome': 'TextEdit', 'Instrument': 'TextEdit', 'Tipo': 'TextEdit', 'Area__m²_': 'TextEdit', });
lyr_Equipamentos_1.set('fieldLabels', {'Tipo_de_eq': 'inline label - visible with data', 'Finalidade': 'inline label - visible with data', 'Operador_d': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Data_de_fa': 'inline label - visible with data', 'Tempo_de_u': 'inline label - visible with data', });
lyr_ServiosdeApoio_2.set('fieldLabels', {'Serviço_o': 'inline label - visible with data', 'Empresa_fo': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_Fundeadouros_3.set('fieldLabels', {'Fundeadour': 'inline label - visible with data', 'Quantidade': 'inline label - visible with data', 'Localizaç': 'inline label - visible with data', 'Diâmetro': 'inline label - visible with data', 'Profundi_1': 'inline label - visible with data', 'Compriment': 'inline label - visible with data', 'Largura__m': 'inline label - visible with data', });
lyr_BaciadeEvoluo_4.set('fieldLabels', {'Quantidade': 'inline label - visible with data', 'Diamentro': 'inline label - visible with data', 'Localizaç': 'inline label - visible with data', 'Profundi_1': 'inline label - visible with data', 'Comprime_1': 'inline label - visible with data', 'Largura__m': 'inline label - visible with data', });
lyr_CanaldeAcesso_5.set('fieldLabels', {'Canal_de_a': 'inline label - visible with data', 'Profundi_1': 'inline label - visible with data', 'Comprime_1': 'inline label - visible with data', 'Largura__m': 'inline label - visible with data', 'Diametro__': 'inline label - visible with data', });
lyr_AcessosRodovirios_6.set('fieldLabels', {'Rotas': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisdiç': 'inline label - visible with data', 'Unidade_da': 'inline label - visible with data', 'PNV': 'inline label - visible with data', 'Extensão': 'inline label - visible with data', 'Classifica': 'inline label - visible with data', 'Concessão': 'inline label - visible with data', 'Município': 'inline label - visible with data', 'VMD_Diári': 'inline label - visible with data', });
lyr_InstalaesNoOperacionais_7.set('fieldLabels', {'Predio': 'inline label - visible with data', 'Uso_da_Ins': 'inline label - visible with data', 'Regime_de': 'inline label - visible with data', 'Just': 'inline label - visible with data', 'Area__m²_': 'inline label - visible with data', });
lyr_Acostagem_8.set('fieldLabels', {'Acostagens': 'inline label - visible with data', 'Estado': 'inline label - visible with data', 'Carac': 'inline label - visible with data', 'Principais': 'inline label - visible with data', 'Comprime_1': 'inline label - visible with data', 'Profundi_1': 'inline label - visible with data', });
lyr_Armazenagem_9.set('fieldLabels', {'CODERN': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Regime_de': 'inline label - visible with data', 'Area__m²_': 'inline label - visible with data', 'Volume__m': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadasdoPorto_10.set('fieldLabels', {'CODERN': 'inline label - visible with data', 'Companhia': 'inline label - visible with data', 'Tipo_de_Pr': 'inline label - visible with data', 'Ins': 'inline label - visible with data', 'Area__m²_': 'inline label - visible with data', });
lyr_reasArrendveisLongoPrazo_11.set('fieldLabels', {'Nome_da_Ar': 'inline label - visible with data', 'Area__m²_': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendveisMdioPrazo_12.set('fieldLabels', {'Nome_da_Ar': 'inline label - visible with data', 'Area__m²_': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendveisCurtoPrazo_13.set('fieldLabels', {'Nome_da_Ar': 'inline label - visible with data', 'Area__m²_': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_Zoneamento_14.set('fieldLabels', {'Operador': 'inline label - visible with data', 'Categoria': 'inline label - visible with data', 'Area__m_': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeAreiaBranca_15.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Instrument': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Area__m²_': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeAreiaBranca_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});