import 'package:flutterst/models/moeda.dart';

class MoedaRepo {
  static List<Moeda> tabela = [
    Moeda(
     icone:'1',
     nome: 'Bitcoin',
     sigla: 'BTC',
     preco: 160000.00,
     ),
     Moeda(
     icone:'2',
     nome: 'Ethereum',
     sigla: 'ETH',
     preco: 2000.00,
     ),
     Moeda(
      icone:'3',
      nome: 'XRP',
      sigla: 'XRP',
      preco: 20.02,
     ),
     Moeda(
      icone:'4',
      nome: 'Cardano',
      sigla: 'ADA',
      preco: 6.31,
     ),
     Moeda(
      icone:'4',
      nome: 'USD Coin',
      sigla: 'USDC',
      preco: 5.06,
     ),
     Moeda(
      icone:'6',
      nome: 'Litecoin',
      sigla: 'LTC',
      preco: 665.99,
     ),
     ];
}